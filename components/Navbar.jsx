import React from "react"
import Sidebar from "./Sidebar"
import Link from "next/link"
import {HiOutlineHome} from "react-icons/hi"

const Navbar = () => {
  return (
    <nav className="flex z-10 items-center justify-evenly py-3 fixed bottom-0 bg-black w-[100vw] text-white border-t border-[#333333] dark:bg-white dark:text-black ">
        <Sidebar/>
      
        <Link className="hover:text-orange-400" href="/">
        <HiOutlineHome size="1.5rem"/>
        </Link>
      
        
        {/* <div><IoSearch size="1.5rem"/></div> */}
        
    </nav>
  )
}

export default Navbar