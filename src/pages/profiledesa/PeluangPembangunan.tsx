import Header from "src/components/profildesa/header";
import Profiledesa from "src/components/profildesa/profildesa";
import Footer from "src/Layout/footer";
import Navbar from "src/Layout/navbar";
const PeluangPembangunan = () => {
    return (
        <>
            <Navbar />
            <Header/>
            <Profiledesa/>
            <div className="mx-auto font-bold w-11/12">
                <h2 className="text-2xl text-green-500 mt-10">Status Desa Data IDM Desa Menawan</h2>
                <div className="mt-6 bg-gray-100 rounded-md">
                    <ul className="flex">
                        <li className="text-gray-400 py-4 px-8 mx-12">IKS</li>
                        <li className="text-gray-400 py-4 px-8 mx-12">IKL</li>
                        <li className="text-gray-400 py-4 px-8 mx-12">IKE</li>
                        <li className="text-green-500 border-b-4 border-green-500 py-4 px-8 mx-12">Peluang Pembangunan</li>
                    </ul>
                </div>
                <h2 className="text-xl text-green-500 text-center my-10">Volunteers</h2>
                <div className="flex flex-wrap justify-around">
                    <div className="card bg-gray-50 rounded-2xl shadow-md w-5/12 h-96 my-5 p-5">
                        <h3 className="text-center my-5 text-xl text-green-500">Sektor Pendidikan</h3>
                        <p className="font-light text-gray-500 text-center">Desa Menawan membutuhkan bantuanmu untuk jadi relawan di sektor pendidikan, yuk dicek apakah kamu diantaranya?</p>
                        <p className="text-center text-green-500">#Pendidikan</p>

                        <div className="text-center mt-8 text-green-600">
                            <p>Relawan Tutor Sebaya (SD-SMA)</p>
                            <p>Relawan Kursus di Desa Menawan</p>
                            <p>Relawan untuk Donasi Buku Taman Baca Menawan</p>
                        </div>

                        <div className=" bg-green-500 py-2 w-2/3 mx-auto rounded-full mt-10 shadow-md">
                            <div className=" text-white text-center font-normal">Apply !</div>
                        </div>
                    </div>
                    <div className="card bg-gray-50 rounded-2xl shadow-md w-5/12 h-96 my-5 p-5">
                        <h3 className="text-center my-5 text-xl text-green-500">Sektor Pendidikan</h3>
                        <p className="font-light text-gray-500 text-center">Desa Menawan membutuhkan bantuanmu untuk jadi relawan di sektor pendidikan, yuk dicek apakah kamu diantaranya?</p>
                        <p className="text-center text-green-500">#Pendidikan</p>

                        <div className="text-center mt-8 text-green-600">
                            <p>Relawan Tutor Sebaya (SD-SMA)</p>
                            <p>Relawan Kursus di Desa Menawan</p>
                            <p>Relawan untuk Donasi Buku Taman Baca Menawan</p>
                        </div>

                        <div className=" bg-green-500 py-2 w-2/3 mx-auto rounded-full mt-10 shadow-md">
                            <div className=" text-white text-center font-normal">Apply !</div>
                        </div>
                    </div>
                    <div className="card bg-gray-50 rounded-2xl shadow-md w-5/12 h-96 my-5 p-5">
                        <h3 className="text-center my-5 text-xl text-green-500">Sektor Pendidikan</h3>
                        <p className="font-light text-gray-500 text-center">Desa Menawan membutuhkan bantuanmu untuk jadi relawan di sektor pendidikan, yuk dicek apakah kamu diantaranya?</p>
                        <p className="text-center text-green-500">#Pendidikan</p>

                        <div className="text-center mt-8 text-green-600">
                            <p>Relawan Tutor Sebaya (SD-SMA)</p>
                            <p>Relawan Kursus di Desa Menawan</p>
                            <p>Relawan untuk Donasi Buku Taman Baca Menawan</p>
                        </div>

                        <div className=" bg-green-500 py-2 w-2/3 mx-auto rounded-full mt-10 shadow-md">
                            <div className=" text-white text-center font-normal">Apply !</div>
                        </div>
                    </div>
                    <div className="card bg-gray-50 rounded-2xl shadow-md w-5/12 h-96 my-5 p-5">
                        <h3 className="text-center my-5 text-xl text-green-500">Sektor Pendidikan</h3>
                        <p className="font-light text-gray-500 text-center">Desa Menawan membutuhkan bantuanmu untuk jadi relawan di sektor pendidikan, yuk dicek apakah kamu diantaranya?</p>
                        <p className="text-center text-green-500">#Pendidikan</p>

                        <div className="text-center mt-8 text-green-600">
                            <p>Relawan Tutor Sebaya (SD-SMA)</p>
                            <p>Relawan Kursus di Desa Menawan</p>
                            <p>Relawan untuk Donasi Buku Taman Baca Menawan</p>
                        </div>

                        <div className=" bg-green-500 py-2 w-2/3 mx-auto rounded-full mt-10 shadow-md">
                            <div className=" text-white text-center font-normal">Apply !</div>
                        </div>
                    </div>
                </div>
                    <h2 className="text-xl text-green-500 text-center my-10">Investments</h2>
                    <div className="w-1/4 bg-gray-50 mx-auto p-6 rounded-lg">
                        <div className="text-center font-light text-gray-400">Opsi ini akan segera tersedia</div>
                    </div>
            </div>
            <Footer />
        </>
    );
};

export default PeluangPembangunan;
