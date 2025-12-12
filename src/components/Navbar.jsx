import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <div
        className="flex justify-between items-center bg-black/80 rounded-2xl h-[55px] px-5"
        data-aos="fade-down"
      >
        <img
          className="w-14"
          src="https://www.plex.tv/wp-content/themes/plex/assets/img/plex-logo.svg"
          alt="jpg"
        />

        <ul className="hidden md:flex text-zinc-300 font-bold text-lg gap-9">
          <li className="hover:text-white cursor-pointer">Free Movies & TV</li>
          <li className="hover:text-white cursor-pointer">Live TV</li>
          <li className="hover:text-white cursor-pointer">Features</li>
          <li className="hover:text-white cursor-pointer">Download</li>
        </ul>

        <ul className="hidden md:flex font-bold text-lg gap-6 items-center">
          <li className="text-zinc-300 hover:text-white hover:underline border-r-2 pr-4">
            <Link to="#">Sign In</Link>
          </li>
          <button className="rounded-lg px-4 py-[2px] bg-[#e8a600] text-black/75">
            <Link to="#">Sign Up Free</Link>
          </button>
        </ul>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden bg-black/90 text-white rounded-xl mt-2 p-5 space-y-4"
          data-aos="fade"
        >
          <ul className="flex flex-col gap-4 text-lg">
            <li className="hover:text-yellow-400 cursor-pointer">Free Movies & TV</li>
            <li className="hover:text-yellow-400 cursor-pointer">Live TV</li>
            <li className="hover:text-yellow-400 cursor-pointer">Features</li>
            <li className="hover:text-yellow-400 cursor-pointer">Download</li>
          </ul>

          <div className="border-t border-gray-600 pt-4 flex flex-col gap-3">
            <Link className="hover:text-yellow-400" to="#">
              Sign In
            </Link>

            <button className="rounded-lg px-4 py-2 bg-[#e8a600] text-black font-bold">
              <Link to="#">Sign Up Free</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
