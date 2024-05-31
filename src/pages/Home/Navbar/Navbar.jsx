import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => console.log(result.user))
      .catch((error) => console.error(error));
  };
  return (
    <div className="navbar justify-between bg-base-100">
      <div className="">
        <Link to="/">
          <button className="btn btn-ghost text-xl">Web Name</button>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <Link to="/services">
            <li>
              <a>Services</a>
            </li>
          </Link>
          <li>
            <details>
              <summary>Dashboard</summary>
              <ul className="p-2 z-10 bg-base-100 rounded-t-none">
                <Link to="/addAService">
                  <li>Add A Service</li>
                </Link>
                <li>
                  <a>Manage Services</a>
                </li>
                <li>
                  <a>Booked Services</a>
                </li>
                <li>
                  <a>Services To Do</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      <div className="flex gap-2">
        <div>
          <Link to="/login">
            {user?.email ? (
              <button onClick={handleLogOut}>Sign Out</button>
            ) : (
              <button className="btn btn-ghost">Login</button>
            )}
          </Link>
        </div>

        <div className="dropdown flex-row dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Name</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
