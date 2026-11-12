import { Link } from "react-router";

const NavBar = () => {
  return (
    <div className="h-28 bg-gray-900 text-white flex items-center justify-center">
      NavBar
      <div className="absolute right-10">
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/customers">Customers</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
