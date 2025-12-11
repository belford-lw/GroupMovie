import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className=" flex justify-around items-center bg-black/80 rounded-2xl h-[55px]">
        <img
          className="size-17"
          src="https://www.plex.tv/wp-content/themes/plex/assets/img/plex-logo.svg"
          alt="jpg"
        />
        <ul className="flex text-zinc-300 font-bold text-lg gap-9">
          <li className="hover:text-white">Free Movies & TV</li>
          <li className="hover:text-white">Live TV</li>
          <li className="hover:text-white">Features</li>
          <li className="hover:text-white">Download</li>
        </ul>
        <ul className="flex font-bold text-lg gap-9">
          <li className="text-zinc-300 hover:text-white hover:underline border-r-2 w-23 h-7">
            <Link to="#">Sign In</Link>
          </li>
          <button className="rounded-lg p-[2px_6px] bg-[#e8a600] text-black/75">
            <Link to="#">Sign Up Free</Link>
          </button>
        </ul>
      </div>
    </div>
  )
}
export default Navbar;
