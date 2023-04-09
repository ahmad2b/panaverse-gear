"use client";
import React, { useEffect, useState } from "react";
import { SuperDevs } from "@/Types";
import Image from "next/image";

const RejectedUsers = () => {
  const [users, setUsers] = useState<SuperDevs[]>([]);

  useEffect(() => {
    // Replace with your API endpoint to fetch pending users
    fetch("/api/rejected")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl mb-4">Rejected Users</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {[
                "ID",
                "Username",
                "Email",
                "Full Name",
                "Profile Picture",
                "Phone Number",
                "Location",
                "Title",
                "Summary",
                "Skills",
                "Experience",
                "Education",
                "Certificates",
                "Github",
                "Linkedin",
                "Personal Website",
                "Social Links",
                "Availability",
                "Preferred Work Types",
                "Resume",
                "Profile Status",
                "Actions",
              ].map((header) => (
                <th
                  key={header}
                  className="px-6 py-3 text-left text-xs bg-slate-300 text-gray-800 font-bold uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border px-4 py-2">{user.id}</td>
                <td className="border px-4 py-2">{user.username}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.full_name}</td>
                <td className="border px-4 py-2">
                  {" "}
                  <Image
                    src={user.profile_picture}
                    alt="Profile Image"
                    width={500}
                    height={500}
                  />
                </td>
                <td className="border px-4 py-2">{user.phone_number}</td>
                <td className="border px-4 py-2">{user.location}</td>
                <td className="border px-4 py-2">{user.professional_title}</td>
                <td className="border px-4 py-2">{user.summary}</td>
                <td className="border px-4 py-2">{user.technical_skills}</td>
                <td className="border px-4 py-2">{user.work_experience}</td>
                <td className="border px-4 py-2">{user.education}</td>

                <td className="border px-4 py-2">{user.certifications}</td>

                <td className="border px-4 py-2">{user.github_profile}</td>
                <td className="border px-4 py-2">{user.linkedin_profile}</td>
                <td className="border px-4 py-2">{user.personal_website}</td>
                <td className="border px-4 py-2">{user.social_media_links}</td>
                <td className="border px-4 py-2">{user.availability_status}</td>
                <td className="border px-4 py-2">
                  {user.preferred_work_types}
                </td>
                <td className="border px-4 py-2">{user.resume}</td>
                <td className="border px-4 py-2">{user.approval_status}</td>

                <td className="border px-4 py-2">
                  <button
                    className="bg-slate-950 w-24 text-xs rounded-md mt-2 text-white  font-medium py-2 px-6 hover:bg-slate-700 "
                    // onClick={() => updateUserStatus(user.id, "approved")}
                  >
                    Approve
                  </button>

                  <button className="bg-slate-950 w-24 text-xs rounded-md mt-2 text-white  font-medium py-2 px-6 hover:bg-slate-700 ">
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RejectedUsers;
