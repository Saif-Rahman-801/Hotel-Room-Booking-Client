import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout successful");
      })
      .catch((error) => {
        toast.error(error);
        console.log(error);
      });
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium"
            >
              <Link to="/">
                <li>Homepage</li>
              </Link>
              <li>
                <a>Rooms</a>
              </li>
              <li>
                <a>My Bookings</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>About us</a>
              </li>
              <li>
                <a>Contact us</a>
              </li>
              <li>
                <a>Gallery</a>
              </li>
              <li>
                <a>Events and Activities</a>
              </li>
              <li>
                <a>Local Area Guide</a>
              </li>
              <li>
                <a>Career Opportunities</a>
              </li>
              <li>
                <a>Privacy Policy and Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl">The Grand Bonjour</a>
        </div>
        <div className="navbar-end">
          {user ? (
            <button onClick={handleLogOut} className="btn rounded-md lowercase">
              Log out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn rounded-md lowercase">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
