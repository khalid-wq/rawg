"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
function BrowsMultiCompo({ url }) {
  const [results, setResults] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(`${url}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const dataPlatform = await response.json();
        const dataResult = dataPlatform.results;
        setResults(dataResult);
        console.log(dataResult);
      } catch (err) {
        console.log(err);
      }
    };
    fetchdata();
  }, [url]);
  return (
    <div className="lg:columns-3 md:columns-2 sm:columns-1">
      {results.map((e, eIndex) => (
        <div
          key={eIndex}
          className="CARD max-w-[350px] relative  overflow-hidden  rounded-lg mb-5"
        >
          {e.image_background && (
            <Image
              src={e.image_background}
              alt="Games Platform "
              width={350}
              height={350}
              className=""
            ></Image>
          )}
          <div className="overlay absolute top-0 left-0 w-full h-full bg-gradient-to-t from-gray-700 "></div>
          <div className="absolute bottom-0  w-full p-5 ">
            <div className="flex flex-col justify-center items-center mb-5">
              <h1>{e.name}</h1>
              <button className="bg-gradient-to-l from-gray-400 py-2 px-5 rounded-md hover:bg-white hover:text-black transition duration-100">
                Follow
              </button>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-1">
              <span className="font-bold">Popular items</span>
              <span>{e.games_count}</span>
            </div>
            {e.games && (
              <div className="flex justify-between  pb-1 flex-col">
                {e.games.slice(0, 3).map((title, pIndex) => (
                  <div key={pIndex} className="flex  justify-between ">
                    <span className="font-light text-sm border-b border-gray-400 ">
                      {title.name}
                    </span>
                    <span className="font-thin text-sm">{title.added}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default BrowsMultiCompo;
