import Navbar from "../layout/newNavbar";
import Footer from "../layout/newFooter";
import HeaderCard from "../components/volunteer/HeaderCard";
import { useState } from "react";
import Header from "../components/profildesa/header";
import ProfileDesaComponent from "../components/volunteer/ProfileDesa";
import DetailDesa from "../components/volunteer/DetailDesa";

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
        <Header />
        <HeaderCard />
        <ProfileDesaComponent />
        <DetailDesa />
      </div>
      <Footer />
    </>
  );
};

export default VolunteerDesa;
