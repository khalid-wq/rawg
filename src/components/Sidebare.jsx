import React from "react";
import Link from "next/link";
import "semantic-ui-css/semantic.min.css";
function Sidebare() {
  return (
    <div className="basis-[15%]   mr-5 h-full sticky top-0">
      <ul className=" flex flex-col gap-5  mb-10">
        <li>
          <Link
            className="text-[20px] font-bold link hover:text-[#606060] transition duration-300"
            href="/"
          >
            Home
          </Link>
        </li>
        <li className="text-[20px] font-bold  hover:text-[#606060] transition duration-300">
          Reviews
        </li>
      </ul>
      <ul className="flex flex-col gap-2 mb-5">
        <span className="font-bold text-[20px]  mb-[10px]">New Realease</span>

        <li className="flex  items-center cursor-pointer group ">
          <div className="ICONBACK  p-2  bg-[#2d2d2d]  mr-1 rounded-md items-center group-hover:bg-white transition duration-35">
            <i className="star icon !m-0 group-hover:text-black transition duration-300"></i>
          </div>
          Last 30 days
        </li>
        <li className="flex  items-center cursor-pointer group ">
          <div className="ICONBACK  p-2  bg-[#2d2d2d]  mr-1 rounded-md items-center  group-hover:bg-white transition duration-35">
            <i className="fire icon !m-0   group-hover:text-black transition duration-300 "></i>
          </div>
          This week
        </li>
        <li className="flex  items-center cursor-pointer group">
          <div className="ICONBACK  p-2  bg-[#2d2d2d]  mr-1 rounded-md items-center  group-hover:bg-white transition duration-35">
            <i className="fast forward icon !m-0   group-hover:text-black transition duration-300 "></i>
          </div>
          Next week
        </li>
        <li className="flex  items-center cursor-pointer group">
          <div className="ICONBACK  p-2  bg-[#2d2d2d]  mr-1 rounded-md items-center  group-hover:bg-white transition duration-35">
            <i className="font-bold  group-hover:text-black transition duration-300 ">
              31
            </i>
          </div>
          Release Calender
        </li>
      </ul>
      <ul className="flex flex-col gap-2">
        <span className="font-bold text-[20px]  mb-[15px]">Top</span>
        <li className="flex  items-center cursor-pointer group">
          <div className="ICONBACK  p-2  bg-[#2d2d2d]  mr-1 rounded-md items-center  group-hover:bg-white transition duration-35">
            <i className="trophy icon !m-0   group-hover:text-black transition duration-300 "></i>
          </div>
          Best of the year{" "}
        </li>
        <li className="flex  items-center cursor-pointer group">
          <div className="ICONBACK  p-2  bg-[#2d2d2d]  mr-1 rounded-md items-center  group-hover:bg-white transition duration-35">
            <i className="chart bar icon !m-0   group-hover:text-black transition duration-300 "></i>
          </div>
          Popular in 2022
        </li>
        <li className="flex  items-center cursor-pointer group">
          <div className="ICONBACK  p-2  bg-[#2d2d2d]  mr-1 rounded-md items-center  group-hover:bg-white transition duration-35">
            <i className="chess king icon !m-0   group-hover:text-black transition duration-300 "></i>
          </div>
          All time top 250
        </li>
      </ul>
      <div className="py-5">
        <Link
          className="link font-bold w-max text-[20px] hover:text-[#606060]"
          href="/games"
        >
          All Games
        </Link>
      </div>

      <ul className="flex flex-col gap-2">
        <Link
          className="link font-bold w-max text-[20px] hover:text-[#606060]"
          href="/games/brows"
        >
          Brows
        </Link>{" "}
        <li>Platform</li>
        <li>Stores</li>
        <li>Genres</li>
        <li>Creators</li>
        <li>Tage</li>
        <li>Developers</li>
        <li>Publishers</li>
        <li></li>
      </ul>
      <ul className="flex flex-col gap-2">
        <span className="font-bold text-[20px] ">Platforms</span>
        <li>PC</li>
        <li>Playstation 4</li>
        <li>Xbox One</li>
        <li>Nintendo Switch</li>
        <li>IOS</li>
        <li>Android</li>
      </ul>
      <ul className="flex flex-col gap-2">
        <span className="font-bold text-[20px] ">Genres</span>
        <li>Action</li>
        <li>Strategy 4</li>
        <li>RPG</li>
        <li>Shooter</li>
        <li>Adventur</li>
        <li>Puzzle</li>
        <li>Racing</li>
        <li>Sports</li>
      </ul>
    </div>
  );
}

export default Sidebare;
