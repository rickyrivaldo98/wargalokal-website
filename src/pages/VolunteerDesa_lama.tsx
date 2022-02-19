import TabDeskripsi from "../components/volunteer/tabDeskripsi";
import TabPerkembangan from "../components/volunteer/tabPerkembangan";
import Footer from "../layout/footer";
import headerBg from "../assets/bg.png";
import { useState } from "react";
import TabFAQ from "../components/volunteer/tabFAQ";
import TabKomentar from "../components/volunteer/tabKomentar";
import Profiledesa from "../components/profildesa/profildesa";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";

const VolunteerDesa = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };
  const handleTab3 = () => {
    setActiveTab("tab3");
  };
  const handleTab4 = () => {
    setActiveTab("tab4");
  };

  return (
    <>
      <Navbar />
      <div>
        <div
          className="bg_profile_desa relative z-10"
          // menampilkan gambar ketika di klik
          style={{
            backgroundImage: `url(${headerBg})`,
          }}
        >
          <div className="bg_overlay_profile_desa"></div>
          <div className="flex min-h-full">
            <div className="m-auto text-white text-center">
              <div className="text-3xl md:text-5xl font-semibold tracking-wider">Desa Menawan</div>
              <div className="mt-3 font-extralight">Kabupaten Kudus, Jawa Tengah</div>
              <div className="mt-8 font-bold text-lg md:text-2xl">
                Pemanfaatan Teknologi di Sekolah Desa Makmur Jaya
              </div>
            </div>
          </div>
          <div className="absolute h-22 w-2/3 sm:w-1/2 bg-white border-4 -bottom-48 sm:-bottom-16 inset-center rounded-2xl px-4 py-3">
            <div className="flex flex-col md:flex-row text-center w-full">
              <div className="w-full sm:w-2/6 py-3">
                <div>5 Perusahaan Sudah Apply</div>
                <Link to="/formvolunteer">
                  <div className="mt-2 py-2 px-2 bg-primary text-white rounded-full">
                    Peraturan syarat dan ketentuan disini
                  </div>
                </Link>
              </div>
              <div className="w-full sm:w-3/6 py-6 px-3 self-center">
                <div className="py-3 bg-primary text-white rounded-full">Apply!</div>
              </div>
              <div className="w-1/6"></div>
            </div>
          </div>
        </div>
        <div className="pt-16"></div>
        <Profiledesa />
        <div className="bg-white mt-20">
          <div className="mx-auto w-11/12">
            <div className="mt-6 bg-gray-100 rounded-md">
              <ul className="flex flex-col flex-wrap lg:flex-row text-center">
                <li
                  className={
                    "py-4 px-8 mx-12 " +
                    (activeTab === "tab1" ? "text-green-500 border-b-4 border-green-500" : "text-gray-400")
                  }
                  onClick={handleTab1}
                >
                  Deskripsi
                </li>
                <li
                  className={
                    "py-4 px-8 mx-12 " +
                    (activeTab === "tab2" ? "text-green-500 border-b-4 border-green-500" : "text-gray-400")
                  }
                  onClick={handleTab2}
                >
                  Perkembangan
                </li>
                <li
                  className={
                    "py-4 px-8 mx-12 " +
                    (activeTab === "tab3" ? "text-green-500 border-b-4 border-green-500" : "text-gray-400")
                  }
                  onClick={handleTab3}
                >
                  FAQ
                </li>
                <li
                  className={
                    "py-4 px-8 mx-12 " +
                    (activeTab === "tab4" ? "text-green-500 border-b-4 border-green-500" : "text-gray-400")
                  }
                  onClick={handleTab4}
                >
                  Komentar
                </li>
                <li className="text-gray-400 py-4 px-8 mx-12">Galeri</li>
              </ul>
            </div>
            {
              {
                tab1: (
                  <div className="bg-gray-100 mt-10">
                    <TabDeskripsi />
                  </div>
                ),
                tab2: (
                  <div className="bg-gray-100 mt-10">
                    <TabPerkembangan />
                  </div>
                ),
                tab3: (
                  <div className="bg-gray-100 mt-10">
                    <TabFAQ />
                  </div>
                ),
                tab4: (
                  <div className="bg-gray-100 mt-10">
                    <TabKomentar />
                  </div>
                ),
              }[activeTab]
            }
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VolunteerDesa;
