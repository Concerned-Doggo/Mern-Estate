import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-lg sm:text-2xl flex flex-wrap">
            <span className="text-slate-500">Real</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex flex-wrap items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>

        <ul className="flex gap-4 text-md sm:text-lg">
          <Link
            to="/"
            className="hidden sm:inline text-slate-700 hover:underline cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hidden sm:inline text-slate-700 hover:underline cursor-pointer"
          >
            About
          </Link>
          <Link
            to="/sign-in"
            className="text-slate-700 hover:underline cursor-pointer"
          >
            Sign In
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
