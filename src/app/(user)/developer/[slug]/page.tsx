"use client";
import React from "react";

const page = (params: { params: { slug: string } }) => {
  console.log(params.params.slug);

  return <div>page</div>;
};

export default page;
