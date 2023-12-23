"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

function Scroll() {
  const BASE_URL =
    "https://api.rawg.io/api/games?key=3dbb8f23fc0d4dd1861ef2a948c40f78";
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchedData = async () => {
      try {
        const respponse = await fetch(`${BASE_URL}`);
        const newData = await respponse.json();
        console.log(newData);
        setData(newData.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchedData();
  }, []);

  return (
    <div className="flex flex-col ">
      <h1 className="font-bold text-[50px]">All Games</h1>
      <div className="flex flex-wrap gap-5  ">
        {data.map((item) => (
          <div className="game-card" key={item.id}>
            <div className="img-container ">
              <Image
                className="rounded-t-xl "
                src={item.background_image}
                alt={item.name}
                width={350}
                height={350}
              />
            </div>

            <div className="p-5 bg-[#202020] rounded-b-xl ">
              <i class="playstation icon"></i>
              <i class="xbox  icon"></i>
              <i class="windows icon"></i>
              <i class="linux icon"></i>
              <i class="nintendo switch icon"></i>
              <p className="font-bold text-lg ">{item.name}</p>
              <div>
                <p>{item.released}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Scroll;
