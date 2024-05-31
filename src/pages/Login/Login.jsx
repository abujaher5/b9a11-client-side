import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";

/**
 * https://i.ibb.co/xJBTTN1/istockphoto-489081568-1024x1024.jpg
 * https://i.ibb.co/swLnDtW/istockphoto-1184924348-1024x1024.jpg
 * https://i.ibb.co/7C3RM5r/istockphoto-1184925451-1024x1024.jpg
 * https://i.ibb.co/R3JTHGy/istockphoto-1444723031-1024x1024.jpg
 * https://i.ibb.co/z4bC8wS/istockphoto-917665380-1024x1024.jpg
 * https://i.ibb.co/w04MnyY/istockphoto-1248664580-1024x1024.jpg
 *
 */

const Login = () => {
  const { logInUser } = useContext(AuthContext);
  const auth = getAuth(app);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    //Sign in user
    logInUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .then((error) => {
        console.error(error);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src="" alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl text-center font-bold pt-4">Login</h1>

          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#FF3811]">Login</button>
            </div>
          </form>
          <div className="text-center space-y-2">
            <p>Or Sign in with</p>
            <p className="flex justify-center text-xl items-center gap-3">
              <button
                onClick={handleGoogleLogin}
                className="flex justify-center text-xl items-center gap-1 btn btn-outline"
              >
                <FcGoogle />
                Google
              </button>
            </p>
            <p className="pb-4">
              New here ?
              <Link to="/register">
                <a className="text-[#FF3811] font-semibold">Register</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
