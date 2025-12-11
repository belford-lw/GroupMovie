import React from "react";

export default function Hero() {
  return (
    <div
      className="
        w-full py-24 px-6 md:px-16 
        bg-gradient-to-br 
        from-[#1b1b2f]/40 
        via-[#4c1d95]/35 
        to-[#1e3a8a]/40
        flex flex-col md:flex-row items-center justify-center gap-20 
        relative overflow-hidden
        text-white
      "
    >
      {/* Kuchliroq blur effektlar */}
      <div className="absolute top-[-100px] right-[-60px] w-[300px] h-[300px] bg-[#4c1d95]/45 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-[-120px] left-[-60px] w-[300px] h-[300px] bg-[#1e3a8a]/45 blur-[160px] rounded-full"></div>

      {/* Rasm */}
      <img
        src="https://www.plex.tv/wp-content/uploads/2025/03/watch-free-mobile.png"
        className="w-[420px] md:w-[500px] drop-shadow-2xl transition-transform duration-500 hover:scale-105"
      />

      {/* Matn qismi */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          It has never been easier
          <br />
          to watch free
          <br />
          <span className="text-yellow-300 drop-shadow-md">movies online.</span>
        </h1>

        <p className="text-gray-200 mt-6 mb-10 text-lg leading-relaxed">
          Once you register for a free account with Plex, we’ll keep your place from
          screen to screen with ease. No matter what device you choose, your free
          movies will always pick up where you left off.
        </p>

        <div className="flex items-center justify-center md:justify-start gap-4">
          <button className="px-10 py-4 cursor-pointer bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 rounded-full text-lg font-semibold shadow-xl transition-transform hover:scale-105 text-gray-900">
            Watch Free
          </button>

          <button className="px-10 py-4 cursor-pointer border border-white/40 hover:bg-white/10 rounded-full text-lg font-semibold transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
