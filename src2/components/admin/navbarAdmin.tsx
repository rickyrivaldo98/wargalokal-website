
import UserDropdown from "./userDropdown";

const NavbarAdmin = () => {
    return (
        <>
            {/* Navbar */}
            <nav className=" top-0 left-0 w-full z-10 bg-primary md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
                <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
                    {/* Brand */}
                    <a
                        className="text-white text-3xl uppercase hidden lg:inline-block font-semibold"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                    >
                        <div className="fas fa-bars">

                        </div>
                    </a>

                    {/* User */}
                    <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
                        <div className="pr-5 far fa-envelope text-white text-2xl"></div>
                        <div className="pr-5 far fa-bell text-white text-2xl"></div>

                        <UserDropdown />
                    </ul>
                </div>
            </nav>
            {/* End Navbar */}
        </>
    );
}

export default NavbarAdmin;