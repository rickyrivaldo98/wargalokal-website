import Navbar from "../layout/newNavbar";
import Footer from "../layout/newFooter";
import HeaderCard from "../components/profildesa/HeaderCard";
import { useState } from "react";
import Header from "../components/profildesa/header";
// import Ike from "../components/profildesa/Ike";
// import Ikl from "../components/profildesa/Ikl";
// import Iks from "../components/profildesa/Iks";
// import PeluangPembangunan from "../components/profildesa/PeluangPembangunan";
import ProfileDesaComponent from "../components/profildesa/ProfileDesa";
import DetailDesa from "../components/profildesa/DetailDesa";

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
        <HeaderCard />
        <ProfileDesaComponent />
        <DetailDesa />
      </div>
      <Footer />
    </>
  );
};

export default ProfileDesa;
