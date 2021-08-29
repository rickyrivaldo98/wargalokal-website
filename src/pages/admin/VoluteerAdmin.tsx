

const VolunteerAdmin = () => {
    return (
        <>
            <div className="flex flex-wrap mt-4">
                <div className="w-full mb-12 px-4">

                    <div
                        className={
                            "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"
                        }
                    >
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                            <div className="flex flex-wrap items-center">
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                    <h3 className={"font-semibold text-lg "}>Volunteer</h3>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">Your Volunteer</div>

                        <div className="flex">
                            <div className="block w-full overflow-x-auto">
                                <div className="my-10 mx-8 rounded-lg border-2 w-80 h-80 shadow-lg">
                                    <div className="h-28 bg-red-300">

                                    </div>
                                    <div className="px-4 py-2">
                                        <div className="text-sm">
                                            Desa Makmur Jaya
                                        </div>
                                        <div className="text-xs">
                                            Pemanfaatan Teknologi di Sekolah Desa Makmur Jaya
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VolunteerAdmin;