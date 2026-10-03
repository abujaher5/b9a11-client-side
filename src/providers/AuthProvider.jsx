import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useRef, useState } from "react";
import app from "../firebase/firebase.config";
import { isAdminEmail, ROLES } from "../config/roles";

export const AuthContext = createContext();
const auth = getAuth(app);
const API_URL = import.meta.env.VITE_API_URL;

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const [roleLoading, setRoleLoading] = useState(true);

  // Role chosen on the register form, consumed on first auth state change
  const preferredRoleRef = useRef(null);

  const resolveRole = async (firebaseUser, preferredRole) => {
    if (!firebaseUser) return null;

    const email = firebaseUser.email || "";

    // Admins are defined by email, no database lookup required
    if (isAdminEmail(email)) return ROLES.ADMIN;

    try {
      const res = await fetch(`${API_URL}/users/${encodeURIComponent(email)}`);
      if (res.ok) {
        const data = await res.json();
        if (data?.role) return data.role;
      }
    } catch (error) {
      console.error("Could not load user role", error);
    }

    // First time we see this user: create the record with the chosen role
    const newRole = preferredRole || ROLES.CONSUMER;
    try {
      await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: firebaseUser.displayName || "",
          email,
          role: newRole,
        }),
      });
    } catch (error) {
      console.error("Could not create user record", error);
    }
    return newRole;
  };

  //create user
  const createUser = async (name, email, password, selectedRole) => {
    setLoading(true);
    preferredRoleRef.current = selectedRole || ROLES.CONSUMER;
    return createUserWithEmailAndPassword(auth, email, password).then(
      async (result) => {
        if (name) {
          await updateProfile(result.user, { displayName: name });
          setUser({ ...auth.currentUser });
        }
        return result;
      },
    );
  };

  //login user
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //logout user
  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    role,
    loading,
    roleLoading,
    createUser,
    logInUser,
    logOut,
  };

  //observer to manage user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setRoleLoading(true);
        const resolvedRole = await resolveRole(
          currentUser,
          preferredRoleRef.current,
        );
        preferredRoleRef.current = null;
        setRole(resolvedRole || ROLES.CONSUMER);
      } else {
        setRole(null);
      }
      setRoleLoading(false);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
