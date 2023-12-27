"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

function Scroll({ url }) {
  const [data, setData] = useState([]);
  const [platform, setPlatform] = useState([]);
  const [genres, setGenres] = useState([]);
  const [dorpDown, setDropDown] = useState(null);
  // const [params, setParams] = useState("-added");
  const icons = [
    { name: "PC", iconClass: "windows icon" },
    { name: "PlayStation", iconClass: "playstation icon" },
    { name: "Xbox", iconClass: "xbox icon" },
    { name: "Apple Macintosh", iconClass: "laptop icon" },
    { name: "Nintendo", iconClass: "nintendo switch icon" },
    { name: "Linux", iconClass: "linux icon" },
    { name: "Android", iconClass: "android icon" },
    { name: "IOS", iconClass: "apple icon" },
  ];

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const respponse = await fetch(`${url}&&page_size=30`);
        const newData = await respponse.json();
        console.log(newData.results);
        setData(newData.results);
        // const metacretics = newData.results.map((meta) => meta.metacritic);
        // console.log(metacretics);
        const allPlatforms = newData.results.map(
          (item) => item.parent_platforms
        );
        setPlatform(allPlatforms);

        const allGenres = newData.results.map((item) => item.genres);
        setGenres(allGenres);
      } catch (err) {
        console.log(err);
      }
    };
    fetchedData();
  }, [url]);

  return (
    <div className="flex  flex-col ">
      {/* <div className="SELECT p-1 mb-10 w-fit gap-5 flex">
        <label
          htmlFor=""
          className="bg-[#202020] py-2 px-3 rounded-md outline-none"
        >
          Order By:
          <select
            name="orders"
            id="1"
            className="bg-[#202020] outline-none"
            onChange={(e) => setParams(e.target.value)}
          >
            <option value="-added">Popularity</option>
            <option value="name">Name</option>
            <option value="added">Date added</option>
            <option value="released">Released date</option>
            <option value="rating">Average rating</option>
          </select>
        </label>
      </div> */}
      {/* contaier GRID */}
      <div className="lg:columns-3 md:columns-2 sm:columns-1	">
        {data.map((item, index) => (
          <div
            className="game-cardtransition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100 duration-200 max-w-[350px] break-inside-avoid-column mb-5"
            key={item.id}
            onMouseEnter={() => setDropDown(index)}
            onMouseLeave={() => setDropDown(null)}
          >
            <div className="img-container ">
              {item.background_image && (
                <Image
                  className="rounded-t-xl "
                  src={item.background_image}
                  alt={item.name}
                  width={350}
                  height={350}
                  priority
                />
              )}
            </div>

            <div className="TEXT-DIV p-5 bg-[#202020] rounded-b-xl ">
              {platform[index] && (
                <div className="flex just">
                  <ul className="flex gap-1">
                    {platform[index].map((pl, plIndex) => (
                      <li key={plIndex}>
                        {icons.some(
                          (icon) => icon.name === pl.platform.name
                        ) && (
                          <i
                            className={
                              icons.find(
                                (icon) => icon.name === pl.platform.name
                              ).iconClass
                            }
                          ></i>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <p className="font-bold text-[25px] mb-1">{item.name}</p>
              <div className="flex gap-2">
                <div className="bg-[#3b3b3b] px-2 py-1 rounded-md">
                  <i className="plus icon ]"></i>
                  700
                </div>
                <div
                  className="
            px-2 py-1 rounded-md bg-[#3b3b3b]"
                >
                  <i className="gift icon  "></i>
                </div>
                <div className="px-2 py-1 rounded-md bg-[#3b3b3b]">
                  <i className="ellipsis horizontal icon  "></i>
                </div>
              </div>
              <div
                key={index}
                className={`DROPDOWN ${
                  dorpDown === index
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                } z-10 absolute bg-[#202020] rounded-b-xl w-full left-0 p-5 transition-opacity ease-in-out duration-300`}
              >
                <div className="flex justify-between text-sm mt-2  border-b border-gray-700">
                  <p className="text-gray-600 ">Release Date: </p>
                  <p>{item.released}</p>
                </div>
                {genres[index] && (
                  <div>
                    <div className="flex justify-between text-sm mt-2  border-b border-gray-700">
                      <p className="text-gray-600 ">Genrs: </p>
                      <p>{genres[index].map((g) => g.name).join(", ")}</p>
                    </div>

                    <div className="flex justify-between text-sm mt-2 ">
                      <p className="text-gray-600 ">Chart: </p>
                      <p>{item.released}</p>
                    </div>
                  </div>
                )}
                <div className="px-3 py-4 bg-[#3b3b3b] rounded-md flex justify-between items-center">
                  <button className="text-lg">Show more like this </button>
                  <i className="angle right icon  font-bold"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Scroll;
