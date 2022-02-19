import { useState } from "react";
import Deskripsi from "./Deskripsi";
import FAQ from "./FAQ";
import Galeri from "./Galeri";
import Komentar from "./Komentar";
import Progress from "./Progress";

const DetailDesa = () => {
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
  const handleTab5 = () => {
    setActiveTab("tab5");
  };
  return (
    <>
      <div className=" mt-16 pb-16 bg-gray-100">
        <p className="text-center p-12 font-bold text-2xl text-green-primary">
          Pemanfaatan Teknologi di Sekolah Desa Menawan
        </p>
        <div className="shadow-lg flex bg-white w-3/4 mx-auto text-center rounded-full text-gray-500">
          <button
            className={
              "flex-1 p-4 rounded-full" + (activeTab === "tab1" ? " bg-green-primary font-bold text-white" : "")
            }
            onClick={handleTab1}
          >
            Deskripsi
          </button>
          <button
            className={
              "flex-1 p-4 rounded-full " + (activeTab === "tab2" ? "bg-green-primary font-bold text-white" : "")
            }
            onClick={handleTab2}
          >
            Progress
          </button>
          <button
            className={
              "flex-1 p-4 rounded-full " + (activeTab === "tab3" ? "bg-green-primary font-bold text-white" : "")
            }
            onClick={handleTab3}
          >
            FAQ
          </button>
          <button
            className={
              "flex-1 p-4 rounded-full " + (activeTab === "tab4" ? "bg-green-primary font-bold text-white" : "")
            }
            onClick={handleTab4}
          >
            Komentar
          </button>
          <button
            className={
              "flex-1 p-4 rounded-full " + (activeTab === "tab5" ? "bg-green-primary font-bold text-white" : "")
            }
            onClick={handleTab5}
          >
            Galeri
          </button>
        </div>
        {
          {
            tab1: <Deskripsi />,
            tab2: <Progress />,
            tab3: <FAQ />,
            tab4: <Komentar />,
            tab5: <Galeri />,
          }[activeTab]
        }
      </div>
    </>
  );
};

export default DetailDesa;
