import { useState } from "react";
import {RxHamburgerMenu} from "react-icons/rx"
import{IoClose} from "react-icons/io5"


function Sidebar() {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <div className="text-white dark:text-black text-2xl top-7 left-10 items-center cursor-pointer" onClick={handleClick}>
        {isOpen ? <IoClose/> : <RxHamburgerMenu/>}
      </div>

      {isOpen &&
      
        <div className="bg-black flex flex-col items-center p-2 top-0 left-20 transition-all ease-in-out dark:text-black dark:bg-white">
        
        <button onClick={alert("Auth currently not available")} 
        type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
        <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
        Sign in with Google
         </button>
        {/* <Link href="#help" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Help</Link> */}
        </div>}

    </>

  );
}

export default Sidebar