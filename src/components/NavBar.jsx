import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrip, faList } from "@fortawesome/free-solid-svg-icons";
import ToggleButton from "./ToggleButton";
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showFav, showGridView } from "../redux/features/helperSlice";
import { useSelector } from "react-redux";
import { logoutUser } from "../redux/features/userSlices";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { showFav: isShowFav, isGridView } = useSelector(
    (state) => state.helper
  );
  const { isLoggedIn, loginUser } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logoutUser());
    isShowFav && dispatch(showFav());
    isGridView && dispatch(showGridView());
    navigate("/login");
  };

  const handleBack = () => {
    navigate("/books");
  };

  return (
    <nav className="w-full dark:bg-slate-800 py-6 bg-white w-screen dark:bg-slate-800 dark:text-gray-400">
      <div className="flex items-center justify-between mx-auto xl:max-w-7xl lg:max-w-5xl md:max-w-3xl md:px-2 px-4">
        <section className="flex items-center text-orange-700 space-x-2">
          <label
            className="font-bold text-xl focus:ring focus:ring-orange-500 focus:ring-opacity-25 outline-none rounded-lg cursor-pointer"
            onClick={handleBack}
          >
            Book Store
          </label>
        </section>
        <section>
          <ul className="md:space-x-8 space-x-6 text-gray-900 font-semibold hidden md:flex">
            {isLoggedIn ? (
              <>
                {loginUser.isAdmin && (
                  <li className="relative group">
                    <NavLink to="/users">
                      <div className="bg-orange-500 px-4 py-1 rounded-xl text-white hover:bg-orange-400 active:bg-orange-600 focus:ring focus:ring-orange-500 focus:ring-opacity-25 outline-none cursor-pointer">
                        <span className="px-1.5"> Users</span>
                      </div>
                      <div className="w-full  bg-transparent group-hover:bg-purple-500 transition-al absolute bottom-0" />
                    </NavLink>
                  </li>
                )}
                <li className="relative group">
                  <NavLink to="/books">
                    <div
                      onClick={() => {
                        isShowFav && dispatch(showFav());
                        dispatch(showGridView());
                      }}
                      className="bg-orange-500 px-4 py-1 rounded-xl text-white hover:bg-orange-400 active:bg-orange-600 focus:ring focus:ring-orange-500 focus:ring-opacity-25 outline-none cursor-pointer"
                    >
                      <FontAwesomeIcon icon={isGridView ? faList : faGrip} />{" "}
                      {isGridView ? "List" : "Grid"}
                    </div>
                    <div className="w-full  bg-transparent group-hover:bg-purple-500 transition-al absolute bottom-0" />
                  </NavLink>
                </li>
                <li className="relative group">
                  <NavLink to="/books">
                    <div
                      className="bg-orange-500 px-4 py-1 rounded-xl text-white hover:bg-orange-400 active:bg-orange-600 focus:ring focus:ring-orange-500 focus:ring-opacity-25 outline-none cursor-pointer"
                      onClick={() => {
                        if (isGridView) dispatch(showGridView());
                        dispatch(showFav());
                      }}
                    >
                      <span className="px-1.5">
                        {" "}
                        {isShowFav ? "Books" : "Favorites"}
                      </span>
                    </div>
                    <div className="w-full  bg-transparent group-hover:bg-purple-500 transition-al absolute bottom-0" />
                  </NavLink>
                </li>
                <li className="relative group" onClick={handleLogout}>
                  <div className="bg-orange-500 px-4 py-1 rounded-xl text-white hover:bg-orange-400 active:bg-orange-600 focus:ring focus:ring-orange-500 focus:ring-opacity-25 outline-none cursor-pointer">
                    <span className="px-1.5"> Logout</span>
                  </div>
                  <div className="w-full  bg-transparent group-hover:bg-purple-500 transition-al absolute bottom-0" />
                </li>
              </>
            ) : (
              <>
                <li className="relative group">
                  <NavLink to="/register">
                    <div className="bg-orange-500 px-4 py-1 rounded-xl text-white hover:bg-orange-400 active:bg-orange-600 focus:ring focus:ring-orange-500 focus:ring-opacity-25 outline-none cursor-pointer">
                      <span className="px-1.5"> Register</span>
                    </div>
                    <div className="w-full  bg-transparent group-hover:bg-purple-500 transition-al absolute bottom-0" />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/login">
                    <div className="bg-orange-500 px-4 py-1 rounded-xl text-white hover:bg-orange-400 active:bg-orange-600 focus:ring focus:ring-orange-500 focus:ring-opacity-25 outline-none cursor-pointer">
                      <span className="px-1.5"> Login </span>
                    </div>
                    <div className="w-full  bg-transparent group-hover:bg-purple-500 transition-al absolute bottom-0" />
                  </NavLink>
                </li>
              </>
            )}
            <li className="relative group">
              <ToggleButton />
              <div className="w-full  bg-transparent group-hover:bg-purple-500 transition-al absolute bottom-0" />
            </li>
          </ul>
        </section>
      </div>
    </nav>
  );
};
export default NavBar;
