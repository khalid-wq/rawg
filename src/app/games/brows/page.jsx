import React from "react";
import BrowsPlatform from "@/components/brows/BrowsPlatform";
function page() {
  const platformUrl = process.env.RAWG_API_PLATF;
  return (
    <div>
      <h1>Brows</h1>
      <div>
        <BrowsPlatform url={platformUrl} />
      </div>
    </div>
  );
}

export default page;
