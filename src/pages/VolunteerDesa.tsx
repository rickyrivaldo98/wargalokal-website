import TabDeskripsi from "src/components/volunteer/tabDeskripsi";
import TabPerkembangan from "src/components/volunteer/tabPerkembangan";
import Footer from "src/Layout/footer";
import Navbar from "src/Layout/navbar";
import headerBg from "../assets/bg.png";
import { useState } from "react";
import TabFAQ from "src/components/volunteer/tabFAQ";
import TabKomentar from "src/components/volunteer/tabKomentar";
import Profiledesa from "src/components/profildesa/profildesa";

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
              <div className="text-5xl  font-semibold tracking-wider">Desa Menawan</div>
              <div className="mt-3 font-extralight">Kabupaten Kudus, Jawa Tengah</div>
              <div className="mt-8 font-bold text-2xl">Pemanfaatan Teknologi di Sekolah Desa Makmur Jaya</div>
            </div>
          </div>
          <div className="absolute h-22 w-1/2 bg-white border-4 -bottom-16 inset-center rounded-2xl px-4 py-3">
            <div className="flex text-center w-full">
              <div className="w-2/6 py-3">
                <div>5 Perusahaan Sudah Apply</div>
                <div className="mt-2 py-2 px-2 bg-primary text-white rounded-full">
                  Peraturan syarat dan ketentuan disini
                </div>
              </div>
              <div className="w-3/6 py-6 px-3 self-center">
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
              <ul className="flex">
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
