import { useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

const useGoogleLogin = () => {
  const [googleLoading, setGoogleLoading] = useState(false);

  const googleLogin = async () => {
    setGoogleLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      return result.user;
    } finally {
      setGoogleLoading(false);
    }
  };

  return { googleLogin, googleLoading };
};

export default useGoogleLogin;
