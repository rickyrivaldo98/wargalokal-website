import Footer from "../Layout/footer";
import Navbar from "../Layout/navbar";
import FilterSektor from "./filterSektor";
import Sektor from "./sektorDesa";

const FindDesa = () => {
  return (
    <>
      <Navbar />
      <div className="section-desatrending container bg-color-gray mx-auto mt-20">
        <div style={{ color: "#008000" }} className="ml-10 my-5 text-heading">
          <br />
          <h3 className="text-xl font-semibold tracking-wide ">Desa yang lagi trending</h3>
          <p>Berdasarkan ketertarikan anda</p>
        </div>
        <div className="flex-none md:flex  justify-center items-center  w-full  rounded-lg  mx-auto">
          <div className="card min-w-sm px-16 transition-shadow shadow-xl  bg-white hover:shadow-xl min-w-max my-5 relative rounded mx-2">
            <div className="absolute right-0 p-3 ">
              <p className="bg-primary text-white p-2 text-sm rounded-full">Open Volunteer</p>
            </div>
            <div className="w-full card__media pt-32"></div>
            <div className="  card__media--aside " />
            <div className="flex items-center p-4">
              <div className="relative flex flex-col items-center w-full">
                <div className="h-24 w-24 md rounded-full relative avatar flex items-end justify-end text-purple-600 min-w-max absolute -top-16 flex bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
                  <img
                    className="h-24 w-24 md rounded-full relative"
                    src="https://avatars3.githubusercontent.com/u/11801238?v=4"
                  />
                  <div className="absolute" />
                </div>
                <div className="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
                  <span style={{ color: "#008000" }} className="text-md  font-semibold">
                    Desa Menawan
                  </span>
                  <span className="text-md whitespace-nowrap text-gray-600">boussadjra</span>
                  <p className="text-sm text-gray-500">Volunteer On technology</p>
                  <div className="py-2 flex space-x-2">
                    <button className="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max text-gray-100 bg-primary hover:bg-green-600 px-4 py-1 flex items-center hover:shadow-lg">
                      APPLY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card min-w-sm px-16 transition-shadow shadow-xl  bg-white hover:shadow-xl min-w-max my-5 relative rounded mx-2">
            <div className="absolute right-0 p-3 ">
              <p className="bg-primary text-white p-2 text-sm rounded-full">Open Volunteer</p>
            </div>
            <div className="w-full card__media pt-32"></div>
            <div className="  card__media--aside " />
            <div className="flex items-center p-4">
              <div className="relative flex flex-col items-center w-full">
                <div className="h-24 w-24 md rounded-full relative avatar flex items-end justify-end text-purple-600 min-w-max absolute -top-16 flex bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
                  <img
                    className="h-24 w-24 md rounded-full relative"
                    src="https://avatars3.githubusercontent.com/u/11801238?v=4"
                  />
                  <div className="absolute" />
                </div>
                <div className="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
                  <span style={{ color: "#008000" }} className="text-md  font-semibold">
                    Desa Menawan
                  </span>
                  <span className="text-md whitespace-nowrap text-gray-600">boussadjra</span>
                  <p className="text-sm text-gray-500">Volunteer On technology</p>
                  <div className="py-2 flex space-x-2">
                    <button className="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max text-gray-100 bg-primary hover:bg-green-600 px-4 py-1 flex items-center hover:shadow-lg">
                      APPLY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card  min-w-sm px-16 transition-shadow shadow-xl  bg-white hover:shadow-xl min-w-max my-5 relative rounded mx-2">
            <div className="absolute right-0 p-3 ">
              <p className="bg-primary text-white p-2 text-sm rounded-full">Open Volunteer</p>
            </div>
            <div className="w-full card__media pt-32"></div>
            <div className="  card__media--aside " />
            <div className="flex items-center p-4">
              <div className="relative flex flex-col items-center w-full">
                <div className="h-24 w-24 md rounded-full relative avatar flex items-end justify-end text-purple-600 min-w-max absolute -top-16 flex bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
                  <img
                    className="h-24 w-24 md rounded-full relative"
                    src="https://avatars3.githubusercontent.com/u/11801238?v=4"
                  />
                  <div className="absolute" />
                </div>
                <div className="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
                  <span style={{ color: "#008000" }} className="text-md  font-semibold">
                    Desa Menawan
                  </span>
                  <span className="text-md whitespace-nowrap text-gray-600">boussadjra</span>
                  <p className="text-sm text-gray-500">Volunteer On technology</p>
                  <div className="py-2 flex space-x-2">
                    <button className="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max text-gray-100 bg-primary hover:bg-green-600 px-4 py-1 flex items-center hover:shadow-lg">
                      APPLY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card  min-w-sm px-16 transition-shadow shadow-xl  bg-white hover:shadow-xl min-w-max my-5 relative rounded mx-2">
            <div className="absolute right-0 p-3 ">
              <p className="bg-primary text-white p-2 text-sm rounded-full">Open Volunteer</p>
            </div>
            <div className="w-full card__media pt-32"></div>
            <div className="  card__media--aside " />
            <div className="flex items-center p-4">
              <div className="relative flex flex-col items-center w-full">
                <div className="h-24 w-24 md rounded-full relative avatar flex items-end justify-end text-purple-600 min-w-max absolute -top-16 flex bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
                  <img
                    className="h-24 w-24 md rounded-full relative"
                    src="https://avatars3.githubusercontent.com/u/11801238?v=4"
                  />
                  <div className="absolute" />
                </div>
                <div className="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
                  <span style={{ color: "#008000" }} className="text-md  font-semibold">
                    Desa Menawan
                  </span>
                  <span className="text-md whitespace-nowrap text-gray-600">boussadjra</span>
                  <p className="text-sm text-gray-500">Volunteer On technology</p>
                  <div className="py-2 flex space-x-2">
                    <button className="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max text-gray-100 bg-primary hover:bg-green-600 px-4 py-1 flex items-center hover:shadow-lg">
                      APPLY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-desaterdekat">
        <div className="flex">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-primary text-white rounded-r-lg">
              <div className="mt-32 ml-5">
                <h2 className="text-3xl w-2/3 font-bold tracking-wide ">Desa Terdekat Dari Kamu</h2>
                <p>Rekomendasi Warga Lokal</p>
              </div>
            </div>
            <div className="flex ">
              <div className="card  min-w-sm px-16 transition-shadow shadow-xl  bg-white hover:shadow-xl min-w-max my-5 relative rounded mx-2">
                <div className="absolute right-0 p-3 ">
                  <p className="bg-primary text-white p-2 text-sm rounded-full">Open Volunteer</p>
                </div>
                <div className="w-full card__media pt-32"></div>
                <div className="  card__media--aside " />
                <div className="flex items-center p-4">
                  <div className="relative flex flex-col items-center w-full">
                    <div className="h-24 w-24 md rounded-full relative avatar flex items-end justify-end text-purple-600 min-w-max absolute -top-16 flex bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
                      <img
                        className="h-24 w-24 md rounded-full relative"
                        src="https://avatars3.githubusercontent.com/u/11801238?v=4"
                      />
                      <div className="absolute" />
                    </div>
                    <div className="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
                      <span style={{ color: "#008000" }} className="text-md  font-semibold">
                        Desa Menawan
                      </span>
                      <span className="text-md whitespace-nowrap text-gray-600">boussadjra</span>
                      <p className="text-sm text-gray-500">Volunteer On technology</p>
                      <div className="py-2 flex space-x-2">
                        <button className="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max text-gray-100 bg-primary hover:bg-green-600 px-4 py-1 flex items-center hover:shadow-lg">
                          APPLY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card  min-w-sm px-16 transition-shadow shadow-xl  bg-white hover:shadow-xl min-w-max my-5 relative rounded mx-2">
                <div className="absolute right-0 p-3 ">
                  <p className="bg-primary text-white p-2 text-sm rounded-full">Open Volunteer</p>
                </div>
                <div className="w-full card__media pt-32"></div>
                <div className="  card__media--aside " />
                <div className="flex items-center p-4">
                  <div className="relative flex flex-col items-center w-full">
                    <div className="h-24 w-24 md rounded-full relative avatar flex items-end justify-end text-purple-600 min-w-max absolute -top-16 flex bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
                      <img
                        className="h-24 w-24 md rounded-full relative"
                        src="https://avatars3.githubusercontent.com/u/11801238?v=4"
                      />
                      <div className="absolute" />
                    </div>
                    <div className="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
                      <span style={{ color: "#008000" }} className="text-md  font-semibold">
                        Desa Menawan
                      </span>
                      <span className="text-md whitespace-nowrap text-gray-600">boussadjra</span>
                      <p className="text-sm text-gray-500">Volunteer On technology</p>
                      <div className="py-2 flex space-x-2">
                        <button className="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max text-gray-100 bg-primary hover:bg-green-600 px-4 py-1 flex items-center hover:shadow-lg">
                          APPLY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-20">
        <FilterSektor />
      </div>
      <div className="my-20">
        <Sektor />
      </div>
      <Footer />
    </>
  );
};

export default FindDesa;
