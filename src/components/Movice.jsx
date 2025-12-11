import { MdOutlinePhonelink } from "react-icons/md";
import Navbar from "./Navbar";
import { LuEarth, LuFilm } from "react-icons/lu";
import { BsPiggyBank } from "react-icons/bs";

const Movice = () => {
  return (
    <div className="w-[94%] ml-[3%]">
      <div className="bg-cover bg-center bg-[url('https://www.plex.tv/wp-content/uploads/2025/03/Watch-Free-Hero-2048x1152-1.png')]">
        <br />
        <Navbar />

        <div className="text-white grid gap-y-15 mt-50 ml-48">
          <h1 className="text-6xl font-bold w-200">
            Free Movies Online, Watch Anytime Anywhere.
          </h1>
          <p className="font-medium text-3xl w-180 mt-[-21px]">
            The search is over! Let Plex help you find the perfect movie to
            watch tonight for free.
          </p>
          <button className="p-[10px_40px] bg-[#e8a600] font-extrabold rounded-[90px] text-lg w-max">
            Watch Free
          </button>
          <br />
          <br />
        </div>
      </div>
      <br />
      <br />
      <div className="w-full flex justify-center">
        <div className="w-[80%] flex justify-between">
          <div className="w-[21%] grid gap-y-3">
            <span className="text-7xl text-[#e900af]">
              <LuEarth />
            </span>
            <h1 className="font-bold text-xl">Works Worldwide</h1>
            <p className="text-zinc-800">
              No other free streaming service delivers more content to and from
              more countries worldwide.
            </p>
          </div>
          <div className="w-[21%] grid gap-y-3">
            <span className="text-7xl text-[#00d9d3]">
              <LuFilm />
            </span>
            <h1 className="font-bold text-xl">Thousands of Titles</h1>
            <p className="text-zinc-800">
              Choose from movies, shows, sports and music documentaries, AMC
              series, Live TV and more.
            </p>
          </div>
          <div className="w-[21%] grid gap-y-3">
            <span className="text-7xl text-[#9b008b]">
              <BsPiggyBank />
            </span>
            <h1 className="font-bold text-xl">Always 100% Free</h1>
            <p className="text-zinc-800">
              Welcome to instant gratification at its best. Watch now without
              any payment or subscription and end the search for free movie
              websites.
            </p>
          </div>
          <div className="w-[21%] grid gap-y-3">
            <span className="text-7xl text-[#e8a600]">
              <MdOutlinePhonelink />
            </span>
            <h1 className="font-bold text-xl">Device-Friendly</h1>
            <p className="text-zinc-800">
              Stream the good stuff from your favorite devices including Apple,
              Android, Smart TVs and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movice;
{
  /* https://www.plex.tv/wp-content/uploads/2025/03/Watch-Free-Hero-2048x1152-1.png  /* orqa fon */
}
// https://www.plex.tv/wp-content/themes/plex/assets/img/plex-logo.svg  //logo img
