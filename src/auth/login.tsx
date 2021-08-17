import { useState } from "react";
import petani from "../assets/icons/petani.png";
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="left-section bg-color-gray relative h-screen">
          <img className="bottom-0 m-auto absolute " src={petani} alt="" />
        </div>
        <div className="right-section m-auto">
          <form method="post" action="#">
            <h1 className=" text-5xl font-semibold tracking-wide mb-5">
              Sign in to <span className="text-green-light font-bold">Warga Lokal</span>
            </h1>
            <div>
              <span className="text-lg text-gray-400">
                Belum daftar ?
              </span>
              <span className="text-green-light font-semibold tracking-wider">
                &nbsp;Daftar
              </span>
            </div>
            <div className="mb-4 mt-6">
              <label
                className="block text-gray-500 text-lg mb-2"
                htmlFor="email"
              >
                E-mail
              </label>
              <input
                className="appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-2 focus:border-opacity-50 focus:border-blue-500"
                id="email"
                type="text"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6 mt-6">
              <label
                className="block text-gray-500 text-lg mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-2 focus:border-opacity-50 focus:border-blue-500"
                id="password"
                type="password"
                placeholder="Your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex w-full mt-8">
              <button
                className="bg-green-dark text-white text-lg py-2 px-4 font-medium rounded-2xl focus:outline-none focus:shadow-outline h-11 hover:bg-opacity-70 w-1/3"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
