import React from "react";
import BrowsPlatform from "@/components/brows/BrowsPlatform";
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
        <BrowsPlatform url={platformUrl} title="Platforms" />
        <br />
        <BrowsPlatform url={genresUrl} title="Genres" />
        <br />
        <BrowsPlatform url={tagsUrl} title="Tags" />
        <br />
        <BrowsPlatform url={creatorsUrl} title="Creators" />
        <br />
        <BrowsPlatform url={devlopersurl} title="Developers" />
        <br />
        <BrowsPlatform url={publisherUrl} title="Publishers" />
        <br />
        <BrowsPlatform url={storesUrl} title="Stores" />
      </div>
    </div>
  );
}

export default page;
