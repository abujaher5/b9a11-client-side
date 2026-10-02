import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaTools,
  FaShieldAlt,
  FaBolt,
  FaCheckCircle,
} from "react-icons/fa";

const features = [
  { icon: FaShieldAlt, text: "Certified repair experts" },
  { icon: FaBolt, text: "Fast 24–48 hour turnaround" },
  { icon: FaCheckCircle, text: "90-day repair warranty" },
];

const Login = () => {
  const { logInUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    setError("");
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logInUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  };

  return (
    <div className="mx-auto grid min-h-[calc(100vh-4.5rem)] max-w-6xl grid-cols-1 overflow-hidden lg:grid-cols-2">
      {/* brand panel */}
      <div className="relative hidden flex-col justify-between bg-gradient-to-br from-primary via-primary to-secondary p-12 text-primary-content lg:flex">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/xJBTTN1/istockphoto-489081568-1024x1024.jpg)",
          }}
        ></div>
        <div className="relative">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/20 text-2xl backdrop-blur-sm">
            <FaTools />
          </span>
          <h2 className="mt-8 text-4xl font-extrabold leading-tight">
            Welcome back to <br /> Fixed Gadget
          </h2>
          <p className="mt-4 max-w-sm text-primary-content/80">
            Sign in to book repairs, track your service, and manage your
            devices — all in one place.
          </p>
        </div>
        <ul className="relative space-y-4">
          {features.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white/20">
                <Icon className="text-sm" />
              </span>
              <span className="text-sm font-medium">{text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* form */}
      <div className="flex items-center justify-center bg-base-100 p-6 sm:p-10">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center lg:text-left">
            <h1 className="text-3xl font-extrabold tracking-tight">Sign In</h1>
            <p className="mt-2 text-sm text-base-content/60">
              Enter your credentials to access your account.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <div className="relative">
                <FaEnvelope className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40" />
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="input input-bordered w-full rounded-xl pl-11"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <div className="relative">
                <FaLock className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  required
                  className="input input-bordered w-full rounded-xl pl-11 pr-11"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-base-content/40 hover:text-primary"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className="text-right">
                <a href="#" className="text-sm link link-hover text-primary">
                  Forgot password?
                </a>
              </div>
            </div>

            {error && (
              <p className="rounded-xl bg-error/10 px-4 py-3 text-sm font-medium text-error">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="btn btn-primary w-full rounded-xl text-sm font-bold shadow-md"
            >
              Login
            </button>
          </form>

          <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-wider text-base-content/40">
            <span className="h-px flex-1 bg-base-300"></span>
            or continue with
            <span className="h-px flex-1 bg-base-300"></span>
          </div>

          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full gap-2 rounded-xl"
          >
            <FcGoogle className="text-xl" />
            Sign in with Google
          </button>

          <p className="mt-6 text-center text-sm text-base-content/60">
            New here?{" "}
            <Link to="/register" className="font-semibold text-primary">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
