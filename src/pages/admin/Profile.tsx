export default function Profile() {
    return (
        <>
            <div className="flex flex-wrap mt-4">
                <div className="w-full mb-12 px-4">
                    <div
                        className={"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"}
                    >
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                            <div className="flex flex-wrap items-center">
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                    <h3 className="font-semibold text-2xl ">Edit Profile</h3>
                                </div>
                            </div>
                        </div>
                        <div className="py-10 w-full flex justify-center">
                            <div className="flex flex-col">
                                <div className="flex justify-center">
                                    <div className=" w-48 h-48 bg-gray-400 rounded-full"></div>
                                    <div className="text-green-light">Edit</div>
                                </div>
                                <div className=" flex justify-center mr-4 my-4">
                                    <div className=" text-4xl mx-2">Name Here</div>
                                    <div className="text-green-light">Edit</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
