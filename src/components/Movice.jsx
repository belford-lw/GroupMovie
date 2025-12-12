import { MdOutlinePhonelink } from "react-icons/md";
import { LuEarth, LuFilm } from "react-icons/lu";
import { BsPiggyBank } from "react-icons/bs";

const Movice = () => {
  return (
    <div className="w-[94%] ml-[3%]">
        <br />
        
      <div
        className="bg-cover bg-center bg-[url('https://www.plex.tv/wp-content/uploads/2025/03/Watch-Free-Hero-2048x1152-1.png')] py-20 px-6 md:px-16 lg:px-48"
      >
        <div className="text-white max-w-3xl space-y-6">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            data-aos="fade-up"
          >
            Free Movies Online, Watch Anytime Anywhere.
          </h1>

          <p
            className="font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            The search is over! Let Plex help you find the perfect movie
            to watch tonight for free.
          </p>

          <button
            className="p-[10px_40px] bg-[#e8a600] font-extrabold rounded-[90px] text-lg w-max cursor-pointer hover:bg-[#ffc400] transition"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            Watch Free
          </button>
        </div>
      </div>

      <div className="w-full flex justify-center mt-16 mb-10 px-4">
        <div className="w-full lg:w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          <div
            className="grid gap-y-3 text-center sm:text-left"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className="text-7xl text-[#e900af] mx-auto sm:mx-0">
              <LuEarth />
            </span>
            <h1 className="font-bold text-xl">Works Worldwide</h1>
            <p className="text-zinc-800">
              No other free streaming service delivers more content
              to and from more countries worldwide.
            </p>
          </div>

          <div
            className="grid gap-y-3 text-center sm:text-left"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="text-7xl text-[#00d9d3] mx-auto sm:mx-0">
              <LuFilm />
            </span>
            <h1 className="font-bold text-xl">Thousands of Titles</h1>
            <p className="text-zinc-800">
              Choose from movies, shows, sports and music documentaries,
              AMC series, Live TV and more.
            </p>
          </div>

          <div
            className="grid gap-y-3 text-center sm:text-left"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <span className="text-7xl text-[#9b008b] mx-auto sm:mx-0">
              <BsPiggyBank />
            </span>
            <h1 className="font-bold text-xl">Always 100% Free</h1>
            <p className="text-zinc-800">
              Watch now without any payment or subscription and end
              the search for free movie websites.
            </p>
          </div>

          <div
            className="grid gap-y-3 text-center sm:text-left"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <span className="text-7xl text-[#e8a600] mx-auto sm:mx-0">
              <MdOutlinePhonelink />
            </span>
            <h1 className="font-bold text-xl">Device-Friendly</h1>
            <p className="text-zinc-800">
              Stream from your favorite devices including Apple,
              Android, Smart TVs and more.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Movice;
