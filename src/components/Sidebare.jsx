import React from "react";
import Link from "next/link";
function Sidebare() {
  return (
    <div className="basis-[15%] px-5  h-full	stiky  top-0">
      <ul className="font-bold flex flex-col gap-5 text-[20px] mb-5">
        <li>Home</li>
        <li>Reviews</li>
      </ul>
      <ul>
        <span className="font-bold text-[20px] ">New Realease</span>

        <li>Last 30 days </li>
        <li>This week</li>
        <li>Next week</li>
        <li>Realese calender</li>
      </ul>
      <ul>
        <span className="font-bold">Top</span>
        <li>Best of the year</li>
        <li>Popular in 2022</li>
        <li>All time top 250</li>
      </ul>
      <Link className="font-bold w-max text-[20px] " href="/games">
        All Games
      </Link>
      <ul>
        <span className="font-bold text-[20px] ">Brows</span>
        <li>Platform</li>
        <li>Stores</li>
        <li>Collections</li>
        <li>Reviewa</li>
        <li>Genres</li>
        <li>Creators</li>
        <li>Tage</li>
        <li>Developers</li>
        <li>Publishers</li>
        <li></li>
      </ul>
      <ul>
        <span className="font-bold text-[20px] ">Platforms</span>
        <li>PC</li>
        <li>Playstation 4</li>
        <li>Xbox One</li>
        <li>Nintendo Switch</li>
        <li>IOS</li>
        <li>Android</li>
      </ul>
      <ul>
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
