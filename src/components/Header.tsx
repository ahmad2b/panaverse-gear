import React from "react";
import Link from "next/link";
import Image from "next/image";
import DarkButton from "@/components/DarkButton";

const Header = () => {
  return (
    <header>
      <nav className=" flex items-center py-1  border-b border-slate-300">
        <div className="flex items-center">
          <div className="mx-3 mr-12">
            <Image
              src="/panaversedao.png"
              alt="Panaverse DAO Logo"
              width={100}
              height={100}
            />
          </div>
          <div className="flex text-sm font-medium mt-2">
            <div className="mx-3 ">
              <Link href="/">Home</Link>
            </div>
            <div className="mx-3 ">
              <Link href="/about">About</Link>
            </div>
            <div className="mx-3 ">
              <Link href="/courses">Courses</Link>
            </div>
            <div className="mx-3">
              <Link href="/enroll">Enroll</Link>
            </div>
            <div className="mx-3">
              <Link href="/faqs">FAQs</Link>
            </div>
            <div className="mx-3">
              <Link href="/contact">Contact</Link>
            </div>
            <div className="mx-3">
              <Link href="/developer">Developer Profiles</Link>
            </div>
            <div className="mx-3">
              <Link href="/register">Register</Link>
            </div>
            <div className="mx-3">
              <Link href="/dashboard">Dashboard</Link>
            </div>
          </div>
        </div>
        <div className="bg-slate-950 rounded-md mt-2 text-white text-sm font-medium py-2 px-6 hover:bg-slate-700 ml-auto">
          <Link href="/login">
            <button className="">Login</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
