import React from "react";

function MiniBare() {
  return (
    <div className="flex  justify-between p-5 ">
      <div className="text-bold flex justify-center items-center font-bold tracking-widest text-xl">
        RAWG
      </div>

      <input
        type="text"
        placeholder="Search..."
        className=" focus:outline-none  w-1/2 bg-slate-500 p-2 rounded-full hover:bg-white transition delay-75"
      />

      <div className="flex justify-center items-center ">
        <ul className="flex  gap-5 justify-center items-center font-bold">
          <li>Loging</li>
          <li>SignIn</li>
          <li>API</li>
          <li>...</li>
        </ul>
      </div>
    </div>
  );
}

export default MiniBare;
