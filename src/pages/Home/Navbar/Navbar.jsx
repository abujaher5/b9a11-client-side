import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // const navigate=useNavigate();

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

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
            <li className="p-2 z-10 bg-base-100 rounded-t-none">Services</li>
          </Link>
          <li>
            <details>
              <summary>Dashboard</summary>
              <ul className="p-2 z-10 bg-base-100  rounded-t-none">
                <Link to="/addAService">
                  <li className="px-2 py-2 mb-1 btn-outline bg-base-100 shadow-lg border  rounded-md">
                    Add A Service
                  </li>
                </Link>
                <Link to="/manageService">
                  <li className="px-2 py-2  mb-1 btn-outline bg-base-100 shadow-lg border  rounded-md">
                    Manage Service
                  </li>
                </Link>
                <Link to="/bookedService">
                  <li className="px-2 mb-1 btn-outline py-2 bg-base-100 shadow-lg border  rounded-md">
                    Booked Service
                  </li>
                </Link>
                <Link to="/serviceToDo">
                  <li className="px-2 py-2 btn-outline bg-base-100 shadow-lg border  rounded-md">
                    Service To Do
                  </li>
                </Link>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      <div className="flex gap-2">
        <div>
          <input
            onChange={handleToggle}
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller"
          />
        </div>
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
