
import { useState } from 'react';
import { Link } from "react-router-dom";


const Sidebar = () => {

    const [collapseShow, setCollapseShow] = useState("hidden");
    const [activeTab, setActiveTab] = useState("home");
    const handleTab1 = () => {
        setActiveTab("home")
    };
    const handleTab2 = () => {
        setActiveTab("volunteer")
    }
    console.log(activeTab)
    return (
        <>
            <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
                <div className="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto z-10">
                    <button
                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                        type="button"
                        onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
                    >
                        <i className="fas fa-bars"></i>

                    </button>
                    <Link
                        className="md:block text-center md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-xl  font-bold p-4 px-0"
                        to="/admin"
                    >
                        Warga Lokal
                    </Link>
                    <div
                        className={
                            "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
                            collapseShow
                        }
                    >
                        {/* Collapse header */}
                        <div className="md:min-w-full md:hidden block pb-4 mb-4">
                            <div className="flex flex-wrap">
                                <div className="w-6/12">
                                    <Link
                                        className="md:block text-center md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm  font-bold p-4 px-0"
                                        to="/"
                                    >
                                        Warga Lokal
                                    </Link>
                                </div>
                                <div className="w-6/12 flex justify-end">
                                    <button
                                        type="button"
                                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                                        onClick={() => setCollapseShow("hidden")}
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Heading */}
                        <h6 className="md:min-w-full text-gray-600 text-lg  font-bold block pt-1 pb-4 no-underline md:mt-20">
                            Dashboard
                        </h6>
                        {/* Navigation */}

                        <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                            <li className="items-center">
                                <Link
                                    className={
                                        "text-base pl-3 py-3 font-bold block " +
                                        (activeTab === "home"
                                            ? "text-green-700 hover:text-green-500 bg-gray-100 border-l-8 border-green-500"
                                            : "text-gray-700 hover:text-gray-500 ")
                                    }
                                    to="/admin"
                                    onClick={handleTab1}
                                >
                                    <i
                                        className={
                                            "fas fa-home mr-2 text-sm " +
                                            (window.location.href.indexOf("/admin") !== -1
                                                ? "opacity-75"
                                                : "text-gray-300")
                                        }
                                    ></i>
                                    Home
                                </Link>
                            </li>
                            <li className="items-center">
                                <Link
                                    className={
                                        "text-base pl-3 py-3 font-bold block " +
                                        (activeTab === "volunteer"
                                            ? "text-green-700 hover:text-green-500 bg-gray-100 border-l-8 border-green-500"
                                            : "text-gray-700 hover:text-gray-500")
                                    }
                                    to="/admin/volunteer-admin"
                                    onClick={handleTab2}
                                >
                                    <i
                                        className={
                                            "fas fa-user-friends mr-2 text-sm " +
                                            (window.location.href.indexOf("/admin/volunteer-admin") !== -1
                                                ? "opacity-75"
                                                : "text-gray-300")
                                        }
                                    ></i>
                                    Volunteer
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Sidebar;