"use client";
import React from "react";
import { useUser } from "../../UserContext";
import NewDevProfile from "@/components/NewDevProfile";
import { SuperDevs } from "@/Types";

const page = ({ params }: { params: { username: string } }) => {
  const { user } = useUser();

  const rendUser = Array.isArray(user) ? user[0] : null;

  return (
    <>
      <>{user && <NewDevProfile user={rendUser} />}</>
    </>
  );
};

export default page;
