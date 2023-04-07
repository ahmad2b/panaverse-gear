import React from "react";
import { User } from "@/Types";
import Link from "next/link";

type DevProfileProps = {
  DevDetails: User;
};

const DevProfile = ({ DevDetails }: DevProfileProps) => {
  return (
    <div className="mt-4 mr-auto mb-4 ml-auto bg-gray-900 max-w-md w-full rounded-md transition-opacity bg-opacity-75">
      <div className="flex flex-col items-center pt-6 pr-6 pb-6 pl-6">
        <img
          src={DevDetails.profile_picture}
          className="flex-shrink-0 object-cover object-center btn- flex w-16 h-16 mr-auto -mb-8 ml-auto rounded-full shadow-xl"
        />
        <p className="mt-10 text-2xl font-semibold leading-none text-white tracking-tighter lg:text-3xl">
          Mark
          {DevDetails.name}
        </p>
        <p className="mt-3 text-base leading-relaxed text-center text-gray-200">
          {DevDetails.bio}
        </p>
        <div className="w-full mt-6">
          <Link
            className="flex text-center items-center justify-center w-full pt-4 pr-10 pb-4 pl-10 text-base
                    font-medium text-white bg-indigo-600 rounded-xl transition duration-500 ease-in-out transform
                    hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            href={`/developer/${DevDetails.name}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DevProfile;
