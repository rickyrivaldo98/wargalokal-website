import { useState } from "react";
import Navbar from "../layout/Navbar";
import petani from "../assets/icons/petani.png";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = { email, password };
    console.log(data);
    validatePassword();
  }

  const validatePassword = () => {
    if (password != confirmPassword) {
      console.log('Password tidak sama');
      setIsValid(false);
    } else {
      console.log('Password sama');
      setIsValid(true);
    }
  }

  return (
    <>
    <Navbar/>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="left-section bg-color-gray relative md:h-screen">
          <img className="bottom-0 m-auto absolute " src={petani} alt="" />
        </div>
        <div className="pt-10 md:pt-0 right-section m-auto">
          <form method="post" action="#" onSubmit={handleSubmit}>
            <h1 className=" text-5xl font-semibold tracking-wide mb-5">
              Sign up to <span className="font-bold text-green-light">Warga Lokal</span>
            </h1>
            <div>
              <span className="text-lg text-gray-400">
                Already a member ?
              </span>
              <span className="text-green-light font-semibold tracking-wider">
                &nbsp;Log in
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
            <div className="mb-6 mt-6">
              <label
                className="block text-gray-500 text-lg mb-2"
                htmlFor="confirm-password"
              >
                Repeat Password
              </label>
              <input
                className="appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-2 focus:border-opacity-50 focus:border-blue-500"
                id="confirm-password"
                type="password"
                placeholder="Confirm password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {!isValid && <div className="text-red-600">Passwords don't match.</div>}
            </div>
            <div className="flex w-full mt-8">
              <button
                className="bg-green-dark text-white text-lg py-2 px-4 font-medium rounded-2xl focus:outline-none focus:shadow-outline h-11 hover:bg-opacity-70 w-1/3"
                type="submit"
              >
                Daftar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
