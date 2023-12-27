import Sidebare from "@/components/Sidebare";
import Scroll from "@/components/Scroll";
import Image from "next/image";

export default function Home() {
  const apiUrl = process.env.RAWG_API;
  return (
    <main className="basis-[85%]">
      <div className="">
        <div className="mb-10">
          <h1 className="font-bold text-[50px] m-0">New and trending</h1>
          <span className="">Based on player counts and release date</span>
        </div>

        <Scroll url={apiUrl} />
      </div>
    </main>
  );
}
