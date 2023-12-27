import Scroll from "@/components/Scroll";
import React from "react";

function page() {
  const apiUrl = process.env.RAWG_API;
  return (
    <div className="basis-[85%]">
      <div className="mb-10">
        <h1 className="font-bold text-[50px] m-0">All Games</h1>
      </div>
      <Scroll url={apiUrl} />
    </div>
  );
}

export default page;
