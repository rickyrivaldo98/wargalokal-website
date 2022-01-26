const Dashboard = () => {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <div className={"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"}>
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-2xl ">Home</h3>
                </div>
              </div>
            </div>
            <div className="py-10 w-full flex justify-evenly">
              <div className="">
                <div className="text-3xl font-black">1 Desa</div>
                <div>Kota Semarang</div>
              </div>
              <div className="">
                <div className="text-3xl font-black">1 Desa</div>
                <div>Kota Semarang</div>
              </div>
              <div className="">
                <div className="text-3xl font-black">1 Desa</div>
                <div>Kota Semarang</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
