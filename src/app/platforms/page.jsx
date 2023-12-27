import BrowsMultiCompo from "@/components/BrowsMultiCompo";
import React from "react";

function page() {
  const platformUrl = process.env.RAWG_API_PLATF;
  return (
    <div className="basis-[85%]">
      <h1>Platforms</h1>
      <BrowsMultiCompo url={platformUrl} />
    </div>
  );
}

export default page;
