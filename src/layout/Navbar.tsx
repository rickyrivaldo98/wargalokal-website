import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";

interface AppProps {
  toggle?: any;
}

const Navbar = ({ toggle }: AppProps) => {
  return (
    <>
      <nav className="flex justify-between items-center h-16 bg-white-500 text-gray-600 relative pt-10 pb-10 shadow-lg ">
        <Link to="/" className="2xl:pl-72 xl:pl-64 lg:pl-28 md:pl-20 pl-10">
          {/* <Image src="../public/logo.png" alt="tes" /> */}
          <div className="text-2xl  ml-3 tracking-wider">Warga Lokal</div>
        </Link>
        <div className="px-10 cursor-pointer md:hidden" onClick={toggle}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
        <div className="pr-10 hidden md:block 2xl:pr-72 xl:pr-64 lg:pr-28">
          <Link
            className=" text-base lg:text-normal font-medium 
            2xl:mr-10 xl:mr-5 lg:mr-3"
            to="/auth/register"
          >
            <button className="py-6 px-4 transition duration-500 bg-transparent hover:bg-yellow-500 hover:text-white">
              Register
            </button>
          </Link>
          <Link className=" text-base lg:text-normal 2xl:mr-10 xl:mr-5 lg:mr-3" to="/auth/login">
            <button className="py-6 px-4 transition duration-500 bg-transparent hover:bg-yellow-500 hover:text-white">
              Login
            </button>
          </Link>
          <Link className=" text-base lg:text-normal 2xl:mr-10 xl:mr-5 lg:mr-3" to="/caridesa">
            <button className="mt-5 transition ease-in bg-primary hover:bg-green-700 text-white py-2 px-4 rounded-full">
              Cari Desa
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
