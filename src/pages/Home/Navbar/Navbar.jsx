import { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import logo from "../../../assets/fixedGadgetLogo.png";
import {
  FaSun,
  FaMoon,
  FaBars,
  FaTimes,
  FaSignOutAlt,
  FaSignInAlt,
  FaThLarge,
  FaPlusCircle,
  FaClipboardList,
  FaTasks,
  FaUserPlus,
  FaChevronDown,
} from "react-icons/fa";

const dashboardLinks = [
  { to: "/addAService", label: "Add A Service", icon: FaPlusCircle },
  { to: "/manageService", label: "Manage Service", icon: FaThLarge },
  { to: "/bookedService", label: "Booked Service", icon: FaClipboardList },
  { to: "/serviceToDo", label: "Service To Do", icon: FaTasks },
];

const navLinkClass = ({ isActive }) =>
  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
    isActive
      ? "text-primary bg-primary/10"
      : "text-base-content/70 hover:text-primary hover:bg-base-200"
  }`;

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const dropdownLinkRef = useRef(null);

  const handleLinkClick = () => {
    if (dropdownLinkRef.current) {
      dropdownLinkRef.current.removeAttribute("open");
    }
  };

  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((current) => (current === "dark" ? "light" : "dark"));

  const closeMenu = () => setMenuOpen(false);

  const handleLogOut = () => {
    closeMenu();
    logOut()
      .then((result) => console.log(result.user))
      .catch((error) => console.error(error));
  };

  return (
    <header className="sticky top-0 z-50 border-b border-base-300 bg-base-100/80 backdrop-blur-md shadow-sm">
      <div className="navbar min-h-[4.5rem] px-2 sm:px-4">
        {/* logo */}
        <div className="flex-1">
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex items-center gap-2"
          >
            <img
              src={logo}
              alt="Fixed Gadget logo"
              className="h-10 w-10 rounded-xl object-cover shadow-md ring-2 ring-primary/40 transition-transform duration-300 group-hover:rotate-12"
            />
            <span className="flex flex-col leading-none">
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Fixed Gadget
              </span>
              <span className="hidden sm:block text-[10px] uppercase tracking-[0.25em] text-base-content/50">
                Repair Experts
              </span>
            </span>
          </Link>
        </div>

        {/* desktop menu */}
        <nav className="hidden lg:flex items-center gap-1">
          <NavLink to="/allService" className={navLinkClass}>
            Services
          </NavLink>

          {user && (
            <details className="dropdown" ref={dropdownLinkRef}>
              <summary className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium cursor-pointer list-none text-base-content/70 hover:text-primary hover:bg-base-200 transition-all duration-200">
                Dashboard
                <FaChevronDown className="text-[10px] opacity-60" />
              </summary>
              <ul className="menu dropdown-content mt-3 w-56 p-2 bg-base-100 rounded-2xl border border-base-200 shadow-xl">
                {dashboardLinks.map(({ to, label, icon: Icon }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      onClick={handleLinkClick}
                      className="flex items-center gap-3 rounded-xl"
                    >
                      <Icon className="text-primary" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          )}
        </nav>

        {/* actions */}
        <div className="flex-none flex items-center gap-2 lg:ml-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="btn btn-ghost btn-circle"
          >
            {theme === "dark" ? (
              <FaSun className="text-lg text-warning" />
            ) : (
              <FaMoon className="text-lg text-primary" />
            )}
          </button>

          {/* auth */}
          <div className="hidden lg:flex items-center gap-2">
            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="flex items-center gap-2 rounded-full p-1 pr-3 hover:bg-base-200 transition-colors"
                >
                  <div className="avatar">
                    <div className="w-9 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
                      <img
                        referrerPolicy="no-referrer"
                        alt={user?.displayName || "User Profile"}
                        src={
                          user?.photoURL ||
                          `https://ui-avatars.com/api/?name=${
                            user?.displayName || "User"
                          }&background=random`
                        }
                      />
                    </div>
                  </div>
                  <span className="text-sm font-semibold max-w-[8rem] truncate">
                    {user?.displayName || "Account"}
                  </span>
                </div>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content mt-3 w-56 p-2 bg-base-100 rounded-2xl border border-base-200 shadow-xl"
                >
                  <li className="px-3 py-2">
                    <div className="flex flex-col">
                      <span className="font-semibold">
                        {user?.displayName || "User"}
                      </span>
                      <span className="text-xs text-base-content/50 truncate">
                        {user?.email}
                      </span>
                    </div>
                  </li>
                  <div className="divider my-1"></div>
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="text-error flex items-center gap-3 rounded-xl"
                    >
                      <FaSignOutAlt />
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="btn btn-ghost gap-2 rounded-full text-sm"
                >
                  <FaSignInAlt />
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn btn-primary gap-2 rounded-full text-sm shadow-md"
                >
                  <FaUserPlus />
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* mobile toggle */}
          <button
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            className="btn btn-ghost btn-circle lg:hidden"
          >
            {menuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-5 pt-1 space-y-1 border-t border-base-300 bg-base-100">
          {user && (
            <div className="flex items-center gap-3 py-3">
              <div className="avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
                  <img
                    referrerPolicy="no-referrer"
                    alt={user?.displayName || "User Profile"}
                    src={
                      user?.photoURL ||
                      `https://ui-avatars.com/api/?name=${
                        user?.displayName || "User"
                      }&background=random`
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">
                  {user?.displayName || "User"}
                </span>
                <span className="text-xs text-base-content/50 truncate">
                  {user?.email}
                </span>
              </div>
            </div>
          )}

          <NavLink
            to="/allService"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                isActive
                  ? "text-primary bg-primary/10"
                  : "hover:bg-base-200"
              }`
            }
          >
            Services
          </NavLink>

          {user && (
            <>
              <p className="px-4 pt-3 pb-1 text-xs font-semibold uppercase tracking-wider text-base-content/40">
                Dashboard
              </p>
              {dashboardLinks.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "text-primary bg-primary/10"
                        : "hover:bg-base-200"
                    }`
                  }
                >
                  <Icon />
                  {label}
                </NavLink>
              ))}
            </>
          )}

          <div className="divider my-2"></div>

          {user ? (
            <button
              onClick={handleLogOut}
              className="btn btn-error btn-outline w-full rounded-xl gap-2"
            >
              <FaSignOutAlt />
              Sign Out
            </button>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              <Link
                to="/login"
                onClick={closeMenu}
                className="btn btn-ghost rounded-xl gap-2"
              >
                <FaSignInAlt />
                Login
              </Link>
              <Link
                to="/register"
                onClick={closeMenu}
                className="btn btn-primary rounded-xl gap-2"
              >
                <FaUserPlus />
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
