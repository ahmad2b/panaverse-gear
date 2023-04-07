"use client";
import React, { useState } from "react";

interface UserProfileProps {
  id: number;
  name: string;
  email: string;
  password_hash: string;
  public_name: string;
  public_email: string;
  bio: string;
  profile_picture: string;
  is_email_public: boolean;
  is_name_public: boolean;
  created_at: any;
  updated_at: any;
}

const UserProfile = ({
  id,
  name,
  email,
  password_hash,
  public_name,
  public_email,
  bio,
  profile_picture,
  is_email_public,
  is_name_public,
  created_at,
  updated_at,
}: UserProfileProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const [recievedUserDetails, setRecievedUserDetails] = useState({
    id,
    name,
    email,
    password_hash,
    public_name,
    public_email,
    bio,
    profile_picture,
    is_email_public,
    is_name_public,
    created_at,
    updated_at,
  });

  const [editedName, setEditedName] = useState(name);
  const [editedEmail, setEditedEmail] = useState(email);
  const [editedPublicName, setEditedPublicName] = useState(public_name);
  const [editedPublicEmail, setEditedPublicEmail] = useState(public_email);
  const [editedBio, setEditedBio] = useState(bio);
  const [editedIsEmailPublic, setEditedIsEmailPublic] =
    useState(is_email_public);
  const [editedIsNamePublic, setEditedIsNamePublic] = useState(is_name_public);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEditing(false);
    try {
      const response = await fetch("/api/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          isEditing,
          editedName,
          editedEmail,
          editedPublicName,
          editedPublicEmail,
          editedBio,
          editedIsEmailPublic,
          editedIsNamePublic,
        }),
      });

      if (response.ok) {
        setRecievedUserDetails({
          id,
          name: editedName,
          email: editedEmail,
          password_hash,
          public_name: editedPublicName,
          public_email: editedPublicEmail,
          bio: editedBio,
          profile_picture,
          is_email_public: editedIsEmailPublic,
          is_name_public: editedIsNamePublic,
          created_at,
          updated_at,
        });
        console.log("Profile Update successful");
      } else {
        const errorData = await response.json();
        console.error("Error submitting Edit profile form:", errorData);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className=" max-w-4xl mx-auto p-4">
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white shadow-md rounded p-6">
          <div className="flex items-center mb-4">
            <img
              src={recievedUserDetails.profile_picture}
              alt={name}
              className="w-32 h-32 rounded-full mr-4"
            />
            <div>
              <h2 className="text-2xl font-semibold">
                {recievedUserDetails.public_name || recievedUserDetails.name}
              </h2>
              {bio && (
                <p className="text-gray-500">{recievedUserDetails.bio}</p>
              )}
            </div>
          </div>
          {!isEditing ? (
            <>
              {is_email_public && (
                <p>
                  Email:{" "}
                  {recievedUserDetails.public_email ||
                    recievedUserDetails.email}
                </p>
              )}
              <p>
                Joined:{" "}
                {new Date(recievedUserDetails.created_at).toLocaleDateString()}
              </p>
              <p>
                Last Edited:{" "}
                {new Date(recievedUserDetails.updated_at).toLocaleDateString()}
              </p>
              <button
                onClick={handleEditClick}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
              >
                Edit Profile
              </button>
            </>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <label className="block mb-2">
                Name:
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                  className="border px-2 py-1 w-full text-gray-700"
                />
              </label>
              <label className="block mb-2">
                Email:
                <input
                  type="email"
                  value={editedEmail}
                  onChange={(e) => setEditedEmail(e.target.value)}
                  className="border px-2 py-1 w-full text-gray-700"
                />
              </label>
              <label className="block mb-2">
                Public Name:
                <input
                  type="text"
                  value={editedPublicName}
                  onChange={(e) => setEditedPublicName(e.target.value)}
                  className="border px-2 py-1 w-full text-gray-700"
                />
              </label>
              <label className="block mb-2">
                Public Email:
                <input
                  type="email"
                  value={editedPublicEmail}
                  onChange={(e) => setEditedPublicEmail(e.target.value)}
                  className="border px-2 py-1 w-full text-gray-700"
                />
              </label>
              <label className="block mb-2">
                Bio:
                <textarea
                  value={editedBio}
                  onChange={(e) => setEditedBio(e.target.value)}
                  className="border px-2 py-1 w-full text-gray-700"
                ></textarea>
              </label>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={editedIsEmailPublic}
                  onChange={() => setEditedIsEmailPublic(!editedIsEmailPublic)}
                />
                <label className="ml-2">Make Email Public</label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  checked={editedIsNamePublic}
                  onChange={() => setEditedIsNamePublic(!editedIsNamePublic)}
                />
                <label className="ml-2">Make Name Public</label>
              </div>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded mr-2"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={handleEditClick}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
