import { KesehatanChart } from "../data/chart_desa/chart";

const Iks = () => {
    return (
        <>
           
            <div className="mx-auto font-bold w-11/12">
                <h2 className="text-xl text-green-500 text-center my-10">Data Indeks Kesehatan Sosial Desa Menawan</h2>
                <div className="bg-gray-50 p-5 mx-auto w-1/2 shadow-sm rounded-lg">
                    <h2 className="text-xl text-green-600 text-center">Skor Total IKS Desa Menawan saat ini adalah 0,4743</h2>
                </div>
                <div className="flex flex-wrap justify-around my-5">
                    <div className="card bg-gray-50 rounded-2xl shadow-md w-5/12 h-96 my-5">
                        <h3 className="text-center my-5 text-xl text-green-500">Dimensi Kesehatan</h3>
                        <div className="container">

                        <KesehatanChart/>
                        </div>
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
        </>
    );
};

export default Iks;
