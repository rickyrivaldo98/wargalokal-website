const FilterSektor = () => {
  return (
    <>
      <div className="section-desaterdekat">
        <div className=" grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-2 section-filtersektor container bg-color-gray mx-auto">
            <div style={{ color: "#008000" }} className="text-heading ml-4">
              <h3 className="text-3xl font-bold tracking-wide text-primary text-center mt-10">
                Klik Sektor yang diinginkan
              </h3>
            </div>

            <div className="my-20 px-32 flex flex-wrap justify-center items-center gap-x-52 gap-y-20">
              <button className=" max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max text-gray-100 bg-green-400 hover:bg-green-600 px-4 py-1 flex items-center hover:shadow-lg">
                Pendidikan
              </button>
              <button className="max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max text-gray-100 bg-primary hover:bg-green-600 px-4 py-1 flex items-center hover:shadow-lg">
                Pendidikan
              </button>
              <button className=" max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max text-gray-100 bg-primary hover:bg-green-600 px-4 py-1 flex items-center hover:shadow-lg">
                Pendidikan
              </button>
              <button className=" max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max text-gray-100 bg-primary hover:bg-green-600 px-4 py-1 flex items-center hover:shadow-lg">
                Pendidikan
              </button>
              <button className="  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max text-gray-100 bg-primary hover:bg-green-600 px-4 py-1 flex items-center hover:shadow-lg">
                Pendidikan
              </button>
            </div>
          </div>
          <div className="bg-primary text-white rounded-l-lg">
            <div className="mt-24 ml-5">
              <h2 className="leading-normal text-3xl w-1/3 font-bold tracking-wide ">
                Atau Pilih Berdasarkan Sektor?
              </h2>
              <p>Kami juga ada loh</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSektor;
