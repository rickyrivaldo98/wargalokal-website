import { Link } from "react-router-dom";
import logo from "../assets/logowhite.png";

const Footer = () => {
  return (
    <>
      <footer className="footer sm:text-base text-xs bg-green-lightPrimary pt-1 text-white">
        <div className="container ">
          {/* Create 2 grid left and right*/}
          <div className="flex">
            <div className="flex-col w-1/2">
              <Link to="/">
                <div className="flex-1 mx-10 sm:mx-32 flex items-center w-full sm:w-1/2 my-4">
                  <img src={logo} alt="logo" className="sm:h-14 h-10 flex-none sm:mr-5 mr-2" />
                  <h1 className="flex-1 text-base sm:text-3xl font-sans font-bold">Warga Lokal</h1>
                </div>
              </Link>
              <div className="sm:w-1/2 mx-10 sm:mx-32">
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laborum nobis amet deleniti dolorum, qui
                  sit doloremque nihil molestias libero?
                </p>
              </div>
            </div>
            <div className="flex-1 md:mx-32">
              <div className="flex justify-center mt-16">
                <div className="flex-col w-24 md:w-32">
                  <p className="font-semibold text-base md:text-xl mb-3">Fitur</p>
                  <p>Fitur 1</p>
                  <p>Fitur 2</p>
                  <p>Fitur 3</p>
                </div>
                <div className="flex-col md:mx-16">
                  <p className="font-semibold md:text-xl text-base mb-3">Kontak</p>
                  <p>Kontak 1</p>
                  <p>Kontak 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-green-primary">
          <div className="mt-12 flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-6">
              <p className="text-sm font-sans">© 2021 by Warga Lokal</p>
            </div>
          </div>
        </div>
      </footer>
      ;
    </>
  );
};

export default Footer;
