'use client';
import { Bell, Menu, Mic, Search, Video, Youtube } from "lucide-react";
import Link from "next/link";
import React, { useContext } from "react";
import AppContext from "../../../../nextytclone/src/context/appContext";

const TopNavbar = () => {
  const { setShowNav } = useContext(AppContext);
  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-black text-white">
      <div className="flex justify-between items-center px-2 md:px-4 h-16 relative">
        <div className="flex items-center gap-2">
          <span className="hover:bg-background-dark/30 md:block hidden hover:text-gray-200 cursor-pointer rounded-full p-2">
            <Menu  onClick={() => setShowNav(prevState => !prevState)} size={25} />
          </span>
          <Link href="/" className="flex items-center space-x-1">
            <Youtube size={30} className="text-red-700" data-test="logo-test"/>
            <span className="hidden md:block text-xl font-bold">YouTube</span>
          </Link>
        </div>
        <div className="flex items-center bg-slate-400'">
          <input
            type="search"
            className="py-2 px-4 md:w-48 lg:w-[500px] border border-white/15  rounded-l-full focus:outline-none bg-black "
            placeholder="Search"
            data-test="input-test"
          />
           <div className='grid place-content-center bg-background-light bg-white/15 py-[9px] px-4 text-white/80 rounded-r-full hover:bg-white/20 cursor-pointer'>
              <Search className="pr-1"/>
            </div>
          <span className="ml-4 p-2 bg-white/15 text-white/80  rounded-full hidden md:block font-bold hover:bg-white/20 cursor-pointer ">
            <Mic size={25}/>
          </span>
        </div>
        <div className="flex items-center gap-4">
        <span className="p-2 text-white/80 rounded-full hidden md:block font-bold hover:bg-white/20 cursor-pointer ">
            <Video size={20}/>
          </span>
          <span className="p-2 text-white/80 rounded-full hidden md:block font-bold hover:bg-white/20 cursor-pointer ">
            <Bell size={20}/>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
