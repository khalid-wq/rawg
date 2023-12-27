import React from "react";
import BrowsPlatform from "@/components/brows/BrowsPlatform";
import BrowsGenres from "@/components/brows/BrowsGenres";
import BrowsTags from "@/components/brows/BrowsTags";
import BrowsCreators from "@/components/brows/BrowsCreators";
import BrowsDevlopers from "@/components/brows/BrowsDevlopers";
import BrowsPublishers from "@/components/brows/BrowsPublishers";
import BrowsStores from "@/components/brows/BrowsStores";
function page() {
  const platformUrl = process.env.RAWG_API_PLATF;
  const genresUrl = process.env.RAWG_API_GENRES;
  const tagsUrl = process.env.RAWG_API_TAGS;
  const creatorsUrl = process.env.RAWG_API_CREATORS;
  const devlopersurl = process.env.RAWG_API_DEV;
  const publisherUrl = process.env.RAWG_API_PUB;
  const storesUrl = process.env.RAWG_API_STORES;
  return (
    <div className="basis-[85%]">
      <h1>Brows</h1>
      <div className=" ">
        <BrowsPlatform url={platformUrl} />
        <br />
        <BrowsGenres url={genresUrl} />
        <br />
        <BrowsTags url={tagsUrl} />
        <br />
        <BrowsCreators url={creatorsUrl} />
        <br />
        <BrowsDevlopers url={devlopersurl} />
        <br />
        <BrowsPublishers url={publisherUrl} />
        <br />
        <BrowsStores url={storesUrl} />
      </div>
    </div>
  );
}

export default page;
