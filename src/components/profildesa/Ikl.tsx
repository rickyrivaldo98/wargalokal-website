import { PieChartPendidikan } from "../data/chart_desa/chart"

const Ikl = () => {
    return (
        <>
        <div className="mx-auto font-bold w-11/12">
            <h2 className="text-xl text-green-500 text-center my-10">Data Indeks Kesehatan Sosial Desa Menawan</h2>
            <div className="bg-gray-50 p-5 mx-auto w-1/2 shadow-sm rounded-lg">
                <h2 className="text-xl text-green-600 text-center">Skor Total IKL Desa Menawan saat ini adalah 0,8</h2>
            </div>
            <div className="grid grid-cols-1 justify-around my-5">
                <div className="card bg-gray-50 rounded-2xl shadow-md  my-5">
                    <h3 className="text-center my-5 text-xl text-green-500">Dimensi Kesehatan</h3>
                    <div className="container">
                        <PieChartPendidikan/>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default Ikl;
