"use client";
import React, { useEffect, useState } from "react";

function BrowsPlatform({ url }) {
  const [platforms, setPlatforms] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(`${url}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const dataPlatform = await response.json();
        console.log(dataPlatform);
        setPlatforms(dataPlatform);
      } catch (err) {
        console.log(err);
      }
    };
    fetchdata();
  }, [url]);
  return (
    <div>
      <div className="flex items-center justify-center gap-3 ">
        <h1 className="m-0 font-light border-b ">Platforms </h1>
        <div className="flex justify-center items-center  gap-3 text-2xl text-[#727272]">
          {platforms.count}
        </div>
      </div>
    </div>
  );
}

export default BrowsPlatform;
