import TabDeskripsi from "src/components/volunteer/tabDeskripsi"
import TabPerkembangan from "src/components/volunteer/tabPerkembangan"
import Footer from "src/Layout/footer";
import Navbar from "src/Layout/navbar";
import { useState } from 'react';
import * as React from 'react';
import Header from "src/components/profildesa/header";

const ProfileDesa: React.FC = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const handleTab1 = () => {
        setActiveTab("tab1")
    };
    const handleTab2 = () => {
        setActiveTab("tab2")
    }

    return (
        <>
            <Navbar />
            <div>
                <Header/>
                <div className="bg-white mt-20">
                    <div className="mx-auto w-11/12">
                        <div className="mt-6 bg-gray-100 rounded-md">
                            <ul className="flex">
                                <li className={"py-4 px-8 mx-12 " + (activeTab === "tab1" ? "text-green-500 border-b-4 border-green-500" : "text-gray-400")} onClick={handleTab1}>Deskripsi</li>
                                <li className={"py-4 px-8 mx-12 " + (activeTab === "tab2" ? "text-green-500 border-b-4 border-green-500" : "text-gray-400")} onClick={handleTab2}>Perkembangan</li>
                                <li className="text-gray-400 py-4 px-8 mx-12">FAQ</li>
                                <li className="text-gray-400 py-4 px-8 mx-12">Komentar</li>
                                <li className="text-gray-400 py-4 px-8 mx-12">Galeri</li>
                            </ul>
                        </div>
                        {
                            {
                                'tab1':
                                    <div className="bg-gray-100 mt-10">
                                        <TabDeskripsi />
                                    </div>,
                                'tab2':
                                    <div className="bg-gray-100 mt-10">
                                        <TabPerkembangan />
                                    </div>
                            }[activeTab]
                        }

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ProfileDesa;