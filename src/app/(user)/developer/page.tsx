"use client";
import React, { useState, useEffect } from "react";

import ApprovedProfileRender from "@/components/ApprovedProfileRender";
interface users {
  id?: number;
  username: string;
  email: string;
  password: string;
  profile_picture: string;
  skills?: string[];
  projects?: string[];
  awards?: string[];
  social_media_links?: string[];
  // approval_status: ApprovalStatus;
  // role_id: number;
}
const DevDetails = async () => {
  const res = await fetch("/api/devs/");
  const data = await res.json();
  return data;
};

const page = () => {
  const [developer, setDeveloper] = useState<users[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await DevDetails();
      setDeveloper(data);
    };

    fetchData();
  }, []);

  console.log(developer);

  return (
    <div>
      <div className="bg-black flex-col  flex justify-center items-center py-8">
        <h1 className="text-white text-opacity-50 tracking-wider md:text-7xl p-0">
          Panaverse Developers
        </h1>
      </div>

      <div className="flex items-center justify-center mt-8">
        {developer.map((dev: users) => (
          <ApprovedProfileRender
            key={dev.id}
            image={dev.profile_picture}
            name={dev.username}
            title="JamStack Developer"
            description="I am a JamStack Developer with a passion for building fast."
            linkTwitter="https://twitter.com/iamshaunjp"
            linkGit="#"
            linkFB="#"
          />
        ))}
      </div>
    </div>
  );
};

export default page;
