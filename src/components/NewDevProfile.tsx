"use client";
import { useState } from "react";
import { SuperDevs } from "@/Types";
import Image from "next/image";

type Props = {
  user: SuperDevs;
};

const UserProfilePage = ({ user }: Props) => {
  const [editing, setEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState<SuperDevs>(user);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Update user data

    try {
      const response = await fetch(`/api/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });

      const responseUser = await response.json();

      if (responseUser.error) {
        throw new Error(responseUser.message);
      }

      setUpdatedUser(responseUser);
    } catch (error) {
      console.error("Error submitting Edit profile form:", error);
    }

    setEditing(false);
  };

  return (
    <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Image
        className="rounded-full mb-8"
        src={user.profile_picture || "/panaverse80_80.png"}
        alt="Picture of the author"
        width={100}
        height={100}
      />
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
        User Profile
        <br />
        <span className="text-base font-medium">
          Status: {""}
          <span
            className={`text-lg mb-4 font-black ${
              user.approval_status === "approved"
                ? "text-green-600"
                : user.approval_status === "pending"
                ? "text-yellow-600"
                : user.approval_status === "rejected"
                ? "text-red-600"
                : ""
            }`}
          >
            {user.approval_status}
          </span>
        </span>
      </h1>
      <div className="mt-6 border-t border-gray-200 pt-6">
        <form onSubmit={handleSubmit}>
          <dl className="divide-y divide-gray-200">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Username</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {editing ? (
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={updatedUser.username}
                    onChange={handleInputChange}
                    className="block w-full p-2 border shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                ) : (
                  <span>{user.username}</span>
                )}
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Email</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {editing ? (
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={updatedUser.email}
                    onChange={handleInputChange}
                    className="block w-full p-2 border shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                ) : (
                  <span>{user.email}</span>
                )}
              </dd>
            </div>

            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Full Name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {editing ? (
                  <input
                    type="text"
                    name="full_name"
                    id="full_name"
                    value={updatedUser.full_name}
                    onChange={handleInputChange}
                    className="block w-full p-2 border shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                ) : (
                  <span>{user.full_name}</span>
                )}
              </dd>
            </div>

            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">
                Phone Number
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {editing ? (
                  <input
                    type="text"
                    name="phone_number"
                    id="phone_number"
                    value={updatedUser.phone_number}
                    onChange={handleInputChange}
                    className="block w-full p-2 border shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                ) : (
                  <span>{user.phone_number}</span>
                )}
              </dd>
            </div>

            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Location</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {editing ? (
                  <input
                    type="text"
                    name="location"
                    id="location"
                    value={updatedUser.location}
                    onChange={handleInputChange}
                    className="block w-full p-2 border shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                ) : (
                  <span>{user.location}</span>
                )}
              </dd>
            </div>

            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Bio</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {editing ? (
                  <input
                    type="text"
                    name="bio"
                    id="bio"
                    value={updatedUser.summary}
                    onChange={handleInputChange}
                    className="block w-full p-2 border shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                ) : (
                  <span>{user.summary}</span>
                )}
              </dd>
            </div>

            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">
                Profile Picture
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {editing ? (
                  <input
                    type="text"
                    name="profile_picture"
                    id="profile_picture"
                    value={updatedUser.profile_picture}
                    onChange={handleInputChange}
                    className="block w-full p-2 border shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                ) : (
                  <span>{user.profile_picture}</span>
                )}
              </dd>
            </div>

            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Password</dt>

              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {editing ? (
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={updatedUser.password}
                    onChange={handleInputChange}
                    className="block w-full p-2 border shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                ) : (
                  <span>********</span>
                )}
              </dd>
            </div>

            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">
                Phone Number
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {editing ? (
                  <input
                    type="text"
                    name="phone_number"
                    id="phone_number"
                    value={updatedUser.phone_number}
                    onChange={handleInputChange}
                    className="block w-full p-2 border shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                ) : (
                  <span>{user.phone_number}</span>
                )}
              </dd>
            </div>

            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Location</dt>

              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {editing ? (
                  <input
                    type="text"
                    name="location"
                    id="location"
                    value={updatedUser.location}
                    onChange={handleInputChange}
                    className="block w-full p-2 border shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                ) : (
                  <span>{user.location}</span>
                )}
              </dd>
            </div>

            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Skills</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {editing ? (
                  <input
                    type="text"
                    name="skills"
                    id="skills"
                    value={updatedUser.technical_skills}
                    onChange={handleInputChange}
                    className="block w-full p-2 border shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                ) : (
                  <span>{user.technical_skills}</span>
                )}
              </dd>
            </div>

            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">
                Work Experience
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {editing ? (
                  <input
                    type="text"
                    name="skills"
                    id="skills"
                    value={updatedUser.work_experience}
                    onChange={handleInputChange}
                    className="block w-full p-2 border shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                ) : (
                  <span>{user.work_experience}</span>
                )}
              </dd>
            </div>

            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Education</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {editing ? (
                  <input
                    type="text"
                    name="skills"
                    id="skills"
                    value={updatedUser.education}
                    onChange={handleInputChange}
                    className="block w-full p-2 border shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                ) : (
                  <span>{user.education}</span>
                )}
              </dd>
            </div>

            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">
                Certificaitons
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {editing ? (
                  <input
                    type="text"
                    name="skills"
                    id="skills"
                    value={updatedUser.certifications}
                    onChange={handleInputChange}
                    className="block w-full p-2 border shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                ) : (
                  <span>{user.certifications}</span>
                )}
              </dd>
            </div>

            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Projects</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {editing ? (
                  <input
                    type="text"
                    name="skills"
                    id="skills"
                    value={updatedUser.projects}
                    onChange={handleInputChange}
                    className="block w-full p-2 border shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                ) : (
                  <span>{user.projects}</span>
                )}
              </dd>
            </div>

            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">GitHub</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {editing ? (
                  <input
                    type="text"
                    name="skills"
                    id="skills"
                    value={updatedUser.github_profile}
                    onChange={handleInputChange}
                    className="block w-full p-2 border shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                ) : (
                  <span>{user.github_profile}</span>
                )}
              </dd>
            </div>

            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">LinkIn</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {editing ? (
                  <input
                    type="text"
                    name="skills"
                    id="skills"
                    value={updatedUser.linkedin_profile}
                    onChange={handleInputChange}
                    className="block w-full p-2 border shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                ) : (
                  <span>{user.linkedin_profile}</span>
                )}
              </dd>
            </div>

            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">
                Personal Website
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {editing ? (
                  <input
                    type="text"
                    name="skills"
                    id="skills"
                    value={updatedUser.personal_website}
                    onChange={handleInputChange}
                    className="block w-full p-2 border shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                ) : (
                  <span>{user.personal_website}</span>
                )}
              </dd>
            </div>

            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">
                Preferred WorkTypes
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {editing ? (
                  <input
                    type="text"
                    name="skills"
                    id="skills"
                    value={updatedUser.preferred_work_types}
                    onChange={handleInputChange}
                    className="block w-full p-2 border shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                ) : (
                  <span>{user.preferred_work_types}</span>
                )}
              </dd>
            </div>

            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Resume</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {editing ? (
                  <input
                    type="text"
                    name="skills"
                    id="skills"
                    value={updatedUser.resume}
                    onChange={handleInputChange}
                    className="block w-full p-2 border shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                ) : (
                  <span>{user.resume}</span>
                )}
              </dd>
            </div>

            {/* Continue with the other fields */}
          </dl>
          <div className="mt-6">
            {editing ? (
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                // onClick={handleSubmit}
              >
                Save
              </button>
            ) : (
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => setEditing(true)}
              >
                Edit
              </button>
            )}
            {editing && (
              <button
                type="button"
                className="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => {
                  setEditing(false);
                  setUpdatedUser(user);
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfilePage;
