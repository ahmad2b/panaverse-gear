"use client";
import React from "react";
import LoginPanel from "./LoginPanel";
import Image from "next/image";

const LoginLayout = () => {
  return (
    <main className="w-full flex">
      <div className="relative flex-1 hidden items-center justify-center h-screen  lg:flex">
        <div className="relative z-10 w-full max-w-md">
          <Image
            src={"/logina.png"}
            alt="Picture of the author"
            width={1000}
            height={1000}
            className="scale-125"
          />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center h-screen">
        <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
          <LoginPanel />
        </div>
      </div>
    </main>
  );
};

export default LoginLayout;
