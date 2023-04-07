"use client";
import React, { useState, useEffect } from "react";
import DevProfile from "@/components/DevProfile";
import { User } from "@/Types";

const DevDetails = async () => {
  const res = await fetch("/api/devs/");
  const data = await res.json();
  return data;
};

const page = () => {
  const [developer, setDeveloper] = useState<User[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await DevDetails();
      setDeveloper(data);
    };

    fetchData();
  }, []);

  console.log(developer);

  return (
    <div className="flex">
      {developer.map((dev: User) => (
        <DevProfile key={dev.id} DevDetails={dev} />
      ))}
    </div>
  );
};

export default page;
