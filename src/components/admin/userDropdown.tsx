const UserDropdown = () => {
    return (
        <>
            <div className="flex">
                <div className="">
                    <div className="dropdown inline-block relative">
                        <button className="text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                            <div className="rounded-full bg-gray-600 w-10 h-10"></div>
                            <div className="text-white self-center px-3">Selamat Datang NGO</div>
                            <div className="fas fa-caret-down self-center text-2xl text-white"></div>
                        </button>
                        <ul className="dropdown-menu absolute hidden text-white pt-1 px-5 right-0">
                            <li className="bg-green-nav hover:bg-green-navdark rounded-t-lg">
                                <div className="flex align-middle justify-center whitespace-no-wrap">
                                    <a className="py-2 pr-5" href="#">
                                        <i className="fas fa-user-alt py-3 pl-5 pr-3"> </i> Profile
                                    </a>
                                </div>
                            </li>
                            <li className="bg-green-nav hover:bg-green-navdark rounded-b-lg">
                                <div className="flex align-middle justify-center whitespace-no-wrap">
                                    <a className="py-2 pr-5" href="#">
                                        <i className="fas fa-sign-out-alt py-3 pl-5 pr-3"> </i> Logout
                                    </a>
                                </div>
                            </li>

                            {/* <li className="">
                                <a
                                    className="rounded-b-lg bg-green-nav hover:bg-green-navdark py-2 block whitespace-no-wrap"
                                    href="#"
                                >
                                    Logout
                                </a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
            {/* <div className="rounded-full bg-gray-600 w-10 h-10"></div>
      <div className="text-white self-center px-3">Selamat Datang NGO</div>
      <div className="fas fa-caret-down self-center text-2xl text-white"></div> */}
        </>
    );
};

export default UserDropdown;
