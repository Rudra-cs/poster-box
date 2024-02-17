import React, { useState } from 'react'
import { Link } from 'react-router-dom';


// Ant Design Icons 
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {


    const [search,setSearch]=useState<boolean>(false);
    const [sideMenuOpen,setSideMenuOpen] = useState<boolean>(true);
    // const [searchOpen,setSearchOpen] = useState<boolean>(false);


    
    
    // A onClick Handler function  when clicked It displays the Navlinks when Screen size is small
    const ShowMenu = () =>{
        setSideMenuOpen(!sideMenuOpen);
        console.log(sideMenuOpen)
    }
    
    
    
    //A click Handler function when clicked it toggles between showing/not showing search tabs 
    const showSearchTab = () =>{
        setSearch(!search);
        
    }


    //Search Tab 
    const SearchTab = (<div className="flex mt-2 font-light outline-2 border-blue-500 items-center justify-center">
        <div className="flex items-center gap-4 border-2 border-black rounded-md">
         <input type="text" placeholder='Search' className="w-[100%] focus:border-blue-500 p-2 mx-2 outline-none"/>
         <AiOutlineSearch size={26} className="mr-3 font-bold"/>
        </div>
         <AiOutlineClose size={26} className='ml-2' onClick={()=>{setSearch(!search)}}/>
    </div>)


  return (
    <>
      <nav className="bg-gray-800 py-4">
            <div className="flex justify-between w-full">
            
            {/* <!-- Left Side - Navigation Links on Large Screens--> */}
            <div className="hidden md:flex items-center">
             <ul className="flex items-center font-thin">
                <li className="mr-6 hover:underline">
                    <a className="text-white hover:text-gray-300"  href='#'>Home</a>
                </li>
                <li className="mr-6 hover:underline">
                    <a className="text-white hover:text-gray-300"  href='#'>Theme</a>
                </li>
                <li className="mr-6 hover:underline">
                    <a className="text-white hover:text-gray-300"  href='#'>policies</a>
                </li>
                <li className="mr-6 hover:underline">
                    <a className="text-white hover:text-gray-300"  href='#'>About us</a>
                </li>
             </ul>
            </div>



            {/* Sidebar Mobile Menu */}
            <div className="flex items-center pl-3 md:hidden">
              <AiOutlineMenu className='text-slate-100' size={26} onClick={ShowMenu}/>
            </div>

            <div className={`fixed lg:hidden h-full w-screen  bg-black/50 backdrop-blur-sm top-0 right-0 translate-x-0 ${sideMenuOpen ? "translate-x-full" :""}`}>
                <div className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-6 gap-8 z-50 w-56 flex">
                  <AiOutlineClose className='mt-0 mb-2 text-xl cursor-pointer' onClick={()=>{setSideMenuOpen(!sideMenuOpen)}}/>
                  <a href="">Home</a>
                  <a href="">Themes</a>
                  <a href="">About us</a>
                  <a href="">policies</a>
                </div>
            </div>


            {/* <!-- Center - Logo --> */}
            <div className="text-white text-center">
                <span className="font-mono font-bold text-3xl">posterbox.in</span>
            </div>

                


            {/* <!-- Right Side - Navigation Icons --> */}
            <div className="flex items-center">
             <ul className="flex items-center">
                <li className="mr-6">
                      <AiOutlineSearch className="text-white hover:text-gray-300" size={26} onClick={showSearchTab}/>
                </li>
                <li className="mr-6">
                    <a className="text-white hover:text-gray-300" href="#">
                      <AiOutlineUser size={26}/>
                    </a>
                </li>
                <li className="mr-6">
                    <a className="text-white hover:text-gray-300" href="#">
                     <AiOutlineShopping size={26}/>
                    </a>
                </li>
             </ul>
            </div>

        </div>
      </nav>
        {search ? (SearchTab) : ""}
    </>
);
}

export default Navbar