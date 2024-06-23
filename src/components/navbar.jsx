import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../store";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const handlelogout = () => {
    sessionStorage.clear("id");
    dispatch(authActions.logout());
  };
  return (
    <div className="sticky top-0 z-50 bg-gray-200 flex items-center justify-center py-2">
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/003/529/153/small/business-to-do-list-flat-icon-modern-style-free-vector.jpg"
        alt="logo"
        className="h-[50px] px-2"
      />
      <Link to="/">
        <p className="text-2xl font-bold text-blue-500">ToDoList</p>
      </Link>
      <div className="pl-[200px]">
        <ul className="flex items-center gap-20 text-xl font-semibold">
          <li className="cursor-pointer hover:text-blue-500 hover:font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-blue-500 hover:font-semibold">
            <Link to="/about">About</Link>
          </li>
          <li className="cursor-pointer hover:text-blue-500 hover:font-semibold">
            <Link to="/todo">Todo</Link>
          </li>
          {!isLoggedIn && (
            <>
              <li className="cursor-pointer hover:font-semibold bg-blue-500 text-white  px-3 py-1 rounded-lg">
                <Link to="/signup">Sign Up</Link>
              </li>
              <li className="cursor-pointer  hover:font-semibold bg-blue-500 text-white  px-3 py-1 rounded-lg">
                <Link to="/signin">Sign In</Link>
              </li>
            </>
          )}
          {isLoggedIn && (
            <li
              onClick={handlelogout}
              className="cursor-pointer bg-red-600 px-3 py-1 rounded-lg text-white hover:font-semibold"
            >
              <Link to="/logout">Log Out</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
