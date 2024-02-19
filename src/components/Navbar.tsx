import { useState } from "react";

// Ant Design Icons
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [search, setSearch] = useState<boolean>(false);
    const [sideMenuOpen, setSideMenuOpen] = useState<boolean>(true);
    // const [searchOpen,setSearchOpen] = useState<boolean>(false);

    // A onClick Handler function  when clicked It displays the Navlinks when Screen size is small
    const ShowMenu = () => {
        setSideMenuOpen(!sideMenuOpen);
        console.log(sideMenuOpen);
    };

    //A click Handler function when clicked it toggles between showing/not showing search tabs
    const showSearchTab = () => {
        setSearch(!search);
    };

    //Search Tab
    const SearchTab = (
        <div className="flex mt-2 font-light outline-2 border-blue-500 items-center justify-center">
            <div className="flex items-center gap-4 border-2 border-black rounded-md">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-[100%] focus:border-blue-500 p-2 mx-2 outline-none cursor-text"
                />
                <AiOutlineSearch
                    size={26}
                    className="mr-3 font-bold cursor-pointer"
                />
            </div>
            <AiOutlineClose
                size={26}
                className="ml-2 cursor-pointer"
                onClick={() => {
                    setSearch(!search);
                }}
            />
        </div>
    );

    return (
        <>
            <div className="bg-black font-Alegreya-Sans tracking-widest top-0 text-white py-2.5 flex text-xs  justify-center w-full">
                Artistic Elegance
            </div>
            <nav className="bg-gray-800 py-2">
                <div className="flex justify-between w-full">
                    {/* <!-- Left Side - Navigation Links on Large Screens--> */}
                    <div className="hidden md:flex items-center flex-1">
                        <ul className="flex items-center font-thin text-sm">
                            <li className="mr-6 hover:underline">
                                <a
                                    className="text-white hover:text-gray-300 ml-6"
                                    href="#"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="mr-6 hover:underline">
                                <a
                                    className="text-white hover:text-gray-300"
                                    href="#"
                                >
                                    Theme
                                </a>
                            </li>
                            <li className="mr-6 hover:underline">
                                <a
                                    className="text-white hover:text-gray-300"
                                    href="#"
                                >
                                    policies
                                </a>
                            </li>
                            <li className="mr-6 hover:underline">
                                <a
                                    className="text-white hover:text-gray-300"
                                    href="#"
                                >
                                    About Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Sidebar Mobile Menu */}
                    <div className="flex items-center pl-3 md:hidden flex-1 cursor-pointer">
                        <AiOutlineMenu
                            className="text-slate-100"
                            size={26}
                            onClick={ShowMenu}
                        />
                    </div>

                    <div
                        className={`fixed lg:hidden h-full w-screen  bg-black/50 backdrop-blur-sm top-0 right-0 translate-x-0 ${
                            sideMenuOpen ? "translate-x-full" : ""
                        }`}
                    >
                        <div className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-6 gap-8 z-50 w-56 flex">
                            <AiOutlineClose
                                className="mt-0 mb-2 text-lg cursor-pointer"
                                onClick={() => {
                                    setSideMenuOpen(!sideMenuOpen);
                                }}
                            />
                            <a href="">Home</a>
                            <a href="">Themes</a>
                            <a href="">About us</a>
                            <a href="">policies</a>
                        </div>
                    </div>

                    {/* <!-- Center - Logo --> */}
                    <div className="text-white text-center flex-1">
                        <span className="font-mono font-semibold text-2xl">
                            posterbox
                        </span>
                    </div>

                    {/* <!-- Right Side - Navigation Icons --> */}
                    <div className="flex items-center flex-1 ">
                        <ul className="flex ml-auto">
                            <li className="mr-6">
                                <AiOutlineSearch
                                    className="text-white hover:text-gray-300 cursor-pointer"
                                    size={26}
                                    onClick={showSearchTab}
                                />
                            </li>
                            <li className="mr-6">
                                <a
                                    className="text-white hover:text-gray-300"
                                    href="#"
                                >
                                    <AiOutlineUser size={26} />
                                </a>
                            </li>
                            <li className="mr-6">
                                <a
                                    className="text-white hover:text-gray-300"
                                    href="#"
                                >
                                    <AiOutlineShopping size={26} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {search ? SearchTab : ""}
        </>
    );
};

export default Navbar;
