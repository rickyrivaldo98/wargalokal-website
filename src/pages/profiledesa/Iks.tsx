import Header from "src/components/profildesa/header";
import Profiledesa from "src/components/profildesa/profildesa";
import Footer from "src/Layout/footer";
import Navbar from "src/Layout/navbar";
const Iks = () => {
    return (
        <>
            <Navbar />
            <Header/>
            <Profiledesa/>
            <div className="mx-auto font-bold w-11/12">
                <h2 className="text-2xl text-green-500 mt-10">Status Desa Data IDM Desa Menawan</h2>
                <div className="mt-6 bg-gray-100 rounded-md">
                    <ul className="flex">
                        <li className="text-green-500 border-b-4 border-green-500 py-4 px-8 mx-12">IKS</li>
                        <li className="text-gray-400 py-4 px-8 mx-12">IKL</li>
                        <li className="text-gray-400 py-4 px-8 mx-12">IKE</li>
                        <li className="text-gray-400 py-4 px-8 mx-12">Peluang Pembangunan</li>
                    </ul>
                </div>
                <h2 className="text-xl text-green-500 text-center my-10">Data Indeks Kesehatan Sosial Desa Menawan</h2>
                <div className="bg-gray-50 p-5 mx-auto w-1/2 shadow-sm rounded-lg">
                    <h2 className="text-xl text-green-600 text-center">Skor Total IKS Desa Menawan saat ini adalah 0,4743</h2>
                </div>
                <div className="flex flex-wrap justify-around my-5">
                    <div className="card bg-gray-50 rounded-2xl shadow-md w-5/12 h-96 my-5">
                        <h3 className="text-center my-5 text-xl text-green-500">Dimensi Kesehatan</h3>
                    </div>
                    <div className="card bg-gray-50 rounded-2xl shadow-md w-5/12 h-96 my-5">
                        <h3 className="text-center my-5 text-xl text-green-500">Dimensi Pendidikan</h3>
                    </div>
                    <div className="card bg-gray-50 rounded-2xl shadow-md w-5/12 h-96 my-5">
                        <h3 className="text-center my-5 text-xl text-green-500">Modal Sosial</h3>
                    </div>
                    <div className="card bg-gray-50 rounded-2xl shadow-md w-5/12 h-96 my-5">
                        <h3 className="text-center my-5 text-xl text-green-500">Dimensi Permukiman</h3>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Iks;
