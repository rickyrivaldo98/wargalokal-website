import Navbar from "../layout/Navbar";
import Footer from "../layout/footer";
import { useState } from "react";
import Header from "../components/profildesa/header";
import Ike from "../components/profildesa/Ike";
import Ikl from "../components/profildesa/Ikl";
import Iks from "../components/profildesa/Iks";
import PeluangPembangunan from "../components/profildesa/PeluangPembangunan";
import Profiledesa from "../components/profildesa/profildesa";

const ProfileDesa = () => {
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
        <Header />
        <Profiledesa />
        <div className="bg-white mt-20">
          <div className="mx-auto w-11/12">
            <div className="mt-6 bg-gray-100 rounded-md">
              <ul className="flex flex-col md:flex-none">
                <li
                  className={
                    "py-4 px-8 mx-12 " +
                    (activeTab === "tab1" ? "text-green-500 border-b-4 border-green-500" : "text-gray-400")
                  }
                  onClick={handleTab1}
                >
                  IKS
                </li>
                <li
                  className={
                    "py-4 px-8 mx-12 " +
                    (activeTab === "tab2" ? "text-green-500 border-b-4 border-green-500" : "text-gray-400")
                  }
                  onClick={handleTab2}
                >
                  IKL
                </li>
                <li
                  className={
                    "py-4 px-8 mx-12 " +
                    (activeTab === "tab3" ? "text-green-500 border-b-4 border-green-500" : "text-gray-400")
                  }
                  onClick={handleTab3}
                >
                  IKE
                </li>
                <li
                  className={
                    "py-4 px-8 mx-12 " +
                    (activeTab === "tab4" ? "text-green-500 border-b-4 border-green-500" : "text-gray-400")
                  }
                  onClick={handleTab4}
                >
                  Peluang Pembangunan
                </li>
              </ul>
            </div>
            {
              {
                tab1: (
                  <div className=" mt-10">
                    <Iks />
                  </div>
                ),
                tab2: (
                  <div className="mt-10">
                    <Ikl />
                  </div>
                ),
                tab3: (
                  <div className=" mt-10">
                    <Ike />
                  </div>
                ),
                tab4: (
                  <div className="mt-10">
                    <PeluangPembangunan />
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

export default ProfileDesa;
