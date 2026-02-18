import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar justify-center bg-base-300 shadow-sm">
      <NavLink to="/" className="btn btn-ghost text-md">
        Home
      </NavLink>
      <NavLink to="/createCoffee" className="btn btn-ghost text-md">
        Create Coffee
      </NavLink>
      <NavLink to="/signin" className="btn btn-ghost text-md">
        Sign In
      </NavLink>
      <NavLink to="/register" className="btn btn-ghost text-md">
        Register
      </NavLink>
      <NavLink to="/users" className="btn btn-ghost text-md">
        Users
      </NavLink>
    </div>
  );
};

export default Navbar;
