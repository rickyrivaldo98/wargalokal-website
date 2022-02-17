import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
interface AppProps {
  toggle?: any;
}

const Navbar = ({ toggle }: AppProps) => {
  return (
    <>
      <nav className="flex justify-between items-center h-16 bg-white-500 text-gray-600 relative pt-10 pb-10 shadow-lg">
        <Link to="/" className="2xl:ml-32 xl:ml-30 lg:ml-28 md:ml-20 ml-10">
          <div className="flex items-center flex-1">
            <img src={logo} alt="logo" className="h-14 mr-3" />
            <div className="text-2xl font-sans font-bold text-green-primary">Warga Lokal</div>
          </div>
        </Link>
        {/* Searchbar */}
        <div className="flex items-center flex-1 ml-12 2xl:mr-96 xl:mr-72 lg:mr-32 md:mr-16">
          <div className="relative w-full">
            <input
              className="bg-gray-200 text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700 w-full py-2 px-4 pr-8 rounded-full"
              type="text"
              placeholder="Cari Desa"
            />
          </div>
        </div>

        <div className="mr-10 hidden md:block 2xl:mr-32 xl:mr-30 lg:mr-28">
          <Link
            className=" text-base lg:text-normal font-medium 
            2xl:mr-10 xl:mr-5 lg:mr-3 md:mr-3"
            to="/auth/register"
          >
            <button className="py-6 transition duration-500 text-green-primary  hover:font-bold">Register</button>
          </Link>
          <Link className=" text-base lg:text-normal 2xl:mr-10 xl:mr-5 lg:mr-3" to="/auth/login">
            <button className="mt-5 transition ease-in bg-primary text-white py-2 px-8 rounded-full bg-opacity-80 hover:bg-opacity-100">
              Login
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
