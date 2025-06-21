// import { useState } from "react";

export default function Navbar() {
  return (
    <>
      <header className="sticky top-0 w-full bg-[#ffe26d] text-black py-4 z-50">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-5">
          {/* LEFT */}
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold">
              Nőkl
            </h1>
          </div>
          {/* RIGHT */}
          <div className="flex ">
            <ul className=" flex justify-between">
              <li>ToggleDM</li>
              <li>Inbox</li>
              <li>Settings</li>
              <li>Profile</li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}