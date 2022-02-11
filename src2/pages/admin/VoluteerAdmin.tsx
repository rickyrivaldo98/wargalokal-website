import { Link } from "react-router-dom";

const VolunteerAdmin = () => {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <div className={"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"}>
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-2xl">Volunteer</h3>
                </div>
              </div>
            </div>
            <div className="text-center">Your Volunteer</div>
            <div className="flex justify-evenly">
              <div className="my-10 mx-4 rounded-lg w-80 h-80 shadow-lg">
                <div className="h-28 bg-red-300 rounded-lg"></div>
                <div className="px-4 py-2">
                  <div className="text-sm">Desa Makmur Jaya</div>
                  <div className="text-xs font-black">Pemanfaatan Teknologi di Sekolah Desa Makmur Jaya</div>
                </div>
                <div className="text-center pt-5">Status Volunteer</div>
                <div className="text-center font-black">Menunggu Konfirmasi Desa</div>
                <Link to="detail-volunteer-admin">
                  <div className="text-center text-white mt-3 py-2 px-3 mx-20 rounded-full bg-primary">Detail</div>
                </Link>
              </div>
              <div className="my-10 mx-4 rounded-lg w-80 h-80 shadow-lg">
                <div className="h-28 bg-red-300 rounded-lg"></div>
                <div className="px-4 py-2">
                  <div className="text-sm">Desa Makmur Jaya</div>
                  <div className="text-xs font-black">Pemanfaatan Teknologi di Sekolah Desa Makmur Jaya</div>
                </div>
                <div className="text-center pt-5">Status Volunteer</div>
                <div className="text-center font-black">Menunggu Konfirmasi Desa</div>
                <div className="text-center text-white mt-3 py-2 px-3 mx-20 rounded-full bg-primary">Detail</div>
              </div>
              <div className="my-10 mx-4 rounded-lg w-80 h-80 shadow-lg">
                <div className="h-28 bg-red-300 rounded-lg"></div>
                <div className="px-4 py-2">
                  <div className="text-sm">Desa Makmur Jaya</div>
                  <div className="text-xs font-black">Pemanfaatan Teknologi di Sekolah Desa Makmur Jaya</div>
                </div>
                <div className="text-center pt-5">Status Volunteer</div>
                <div className="text-center font-black">Menunggu Konfirmasi Desa</div>
                <div className="text-center text-white mt-3 py-2 px-3 mx-20 rounded-full bg-primary">Detail</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VolunteerAdmin;
