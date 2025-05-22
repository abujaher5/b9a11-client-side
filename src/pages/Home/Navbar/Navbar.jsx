import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const dropdownLinkRef = useRef(null);

  const handleLinkClick = () => {
    if (dropdownLinkRef.current) {
      dropdownLinkRef.current.removeAttribute("open");
    }
  };

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
      {/* logo */}
      <div className="">
        <Link to="/">
          <button className="btn btn-ghost text-xl">Fix Gadget</button>
        </Link>
      </div>

      {/* menu item */}

      <div className="flex-none">
        <ul className="menu menu-horizontal flex justify-center items-center px-1">
          <li className="p-2 z-10 bg-base-100 rounded-t-none">
            <Link to="/allService">Services</Link>
          </li>
          <li>
            <details className="dropdown " ref={dropdownLinkRef}>
              <summary className=" m-1">Dashboard</summary>
              <ul className="p-2 z-10 bg-base-100  rounded-t-none">
                <li className=" mb-1 btn-outline bg-base-100 shadow-lg border  rounded-md">
                  <Link to="/addAService" onClick={handleLinkClick}>
                    Add A Service
                  </Link>
                </li>
                <li className=" mb-1 btn-outline bg-base-100 shadow-lg border  rounded-md">
                  <Link to="/manageService" onClick={handleLinkClick}>
                    Manage Service
                  </Link>
                </li>
                <li className=" mb-1 btn-outline bg-base-100 shadow-lg border  rounded-md">
                  <Link to="/bookedService" onClick={handleLinkClick}>
                    Booked Service
                  </Link>
                </li>
                <li className=" btn-outline bg-base-100 shadow-lg border  rounded-md">
                  <Link to="/serviceToDo" onClick={handleLinkClick}>
                    Service To Do
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      {/* user profile and toggle  button for theme change*/}
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
