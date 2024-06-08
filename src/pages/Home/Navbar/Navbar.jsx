import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // const navigate=useNavigate();

  const handleLogOut = () => {
    logOut()
      .then((result) => console.log(result.user))
      .catch((error) => console.error(error));
  };
  return (
    <div className="navbar justify-between bg-base-100">
      <div className="">
        <Link to="/">
          <button className="btn btn-ghost text-xl">Fix Gadget</button>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <Link to="/allService">
            <li>
              <a>Services</a>
            </li>
          </Link>
          <li>
            <details>
              <summary>Dashboard</summary>
              <ul className="p-2 z-10 bg-base-100 rounded-t-none">
                <Link to="/addAService">
                  <li>
                    <a>Add A Service</a>
                  </li>
                </Link>
                <Link to="/manageService">
                  <li>
                    <a>Manage Service</a>
                  </li>
                </Link>
                <Link to="/bookedService">
                  <li>
                    <a>Booked Service</a>{" "}
                  </li>
                </Link>
                <Link to="/serviceToDo">
                  <li>
                    <a>Service To Do</a>
                  </li>
                </Link>
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
            <div className="w-10 rounded-full" title={user?.displayName}>
              <img
                referrerPolicy="no-referrer"
                alt="User Profile"
                src={user?.photoURL}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <p>{user?.displayName}</p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
