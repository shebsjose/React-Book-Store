
import ToggleButton from "./ToggleButton";
import { useNavigate } from "react-router-dom";


const NavBar = () => {

  const navigate = useNavigate();
  
 const handleLogout = ()=>{
   localStorage.clear();
   navigate('/login')
 }
  return (
    <nav className="w-full py-6 bg-white w-screen">
      <div className="flex items-center justify-between mx-auto xl:max-w-7xl lg:max-w-5xl md:max-w-3xl md:px-2 px-4">
        <section className="flex items-center text-orange-700 space-x-2">
          <label className="font-bold text-xl focus:ring focus:ring-orange-500 focus:ring-opacity-25 outline-none rounded-lg">
            Book Store
          </label>
        </section>
        <section>
        <ToggleButton />
            <ul className="md:space-x-8 space-x-6 text-gray-900 font-semibold hidden md:flex">
              <li className="relative group">
                
                  <span className="px-1.5" onClick={handleLogout}> LogOut</span>

                <div className="w-full  bg-transparent group-hover:bg-orange-500 transition-al absolute bottom-0" />
              </li>
            </ul>
        </section>
      </div>
    </nav>
  );
};
export default NavBar;