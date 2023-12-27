import React from "react";
import Link from "next/link";
function MiniBare() {
  return (
    <div className="flex p-5 justify-around ">
      <div className="text-bold flex justify-center items-center font-bold tracking-widest text-xl">
        <Link
          className="link hover:text-[#606060] transition duration-200"
          href="/"
        >
          R A W G
        </Link>
      </div>

      <input
        type="text"
        placeholder="Search..."
        className=" focus:outline-none  w-1/2 bg-[#3b3b3b] p-3 caret-black rounded-full hover:bg-white focus:bg-white transition duration-200"
      />

      <div className="flex justify-center items-center ">
        <ul className="flex  gap-5 justify-center items-center font-bold">
          <li className="font-normal">Loging</li>
          <li className="font-normal">SignIn</li>
          <li className="font-normal">API</li>
          <li>...</li>
        </ul>
      </div>
    </div>
  );
}

export default MiniBare;
