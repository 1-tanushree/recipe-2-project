import React from "react";
import { Link } from "react-router-dom";
import { Heart, Home } from "lucide-react";

const Sidebar = () => {
  return (
    <>
      <DesktopSidebar />
      <MobileSidebar/>

    </>
  );
};


const DesktopSidebar = () => {
  return (
    <div className="p-3 md:p-10 border-r min-h-screen w-24 md:w-64 hidden sm:block">
      <div className="flex flex-col gap-20 sticky top-10 left-0">
        <div className="w-full">
          <img src="/new.svg" alt="new" className="hidden md:block" />
          <img src="/mobile-logo.svg" alt="logo" className="block md:hidden" />
        </div>
        <ul className="flex flex-col items-center md:items-start gap-8">
          <Link to={"/"} className="flex gap-1 items-center">
            <Home size={24} />
            <span className="font-bold hidden md:block">Home</span>
          </Link>

          <Link to={"/favorites"} className="flex gap-1 items-center">
          <Heart size={24} />
            <span className="font-bold hidden md:block">Favorites</span>
          </Link>
        </ul>
      </div>
    </div>
  );
};

const MobileSidebar=()=>{
    return(
        <div className="flex justify-center gap-10 bordeer-t 
        fixed w-full bottom-0 left-0
         bg-white z-10 p-2 sm:hidden">

        
        <Home size={"24"} className="cursor-pointer"/>
        <Heart size={"24"} className="cursor-pointer"/>
        </div>
    )
    
}

export default Sidebar;