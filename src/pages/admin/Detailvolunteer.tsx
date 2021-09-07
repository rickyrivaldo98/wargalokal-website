import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Detailvolunteer = () => {
    const history = useHistory();
    return (
        <>
            <div className="flex flex-wrap mt-4">
                <Link to='' onClick={() => history.goBack()}>
                    <div className="my-5 ml-5 py-2 px-10 rounded-full bg-primary text-white">Back</div>
                </Link>
                <div className="w-full mb-12 px-4">
                    <div
                        className="flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"
                    >
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                <h3 className="font-semibold text-2xl">Volunteer</h3>
                            </div>
                        </div>
                        <div className="my-10 mx-4 rounded-lg shadow-lg">
                            <div className="h-80 bg-red-300 rounded-lg">
                            </div>
                            <div className="px-4 py-2 text-center">
                                <div className="text-3xl pt-2">
                                    Desa Makmur Jaya
                                </div>
                                <div className="text-3xl font-black text-green-700 py-3">
                                    Pemanfaatan Teknologi di Sekolah Desa Makmur Jaya
                                </div>
                                <div className="text-lg font-black text-gray-500 py-3">
                                    Status Volunteer
                                </div>
                            </div>
                            <div className="kontainerbar">
                                <ul className="progressbar">
                                    <li className="active">
                                        <b>Status</b>
                                        <br />
                                        <p>Status</p>
                                    </li>
                                    <li>
                                        <b>Status</b>
                                        <br />
                                        <p>Status</p>
                                    </li>
                                    <li>
                                        <b>Status</b>
                                        <br />
                                        <p>Status</p>
                                    </li>
                                    <li>
                                        <b>Status</b>
                                        <br />
                                        <p>Status</p>
                                    </li>
                                    <li>
                                        <b>Status</b>
                                        <br />
                                        <p>Status</p>
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default Detailvolunteer;