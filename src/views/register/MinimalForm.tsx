"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";
import Image from "next/image";
import { SuperDevs } from "@/Types";
import { useRouter } from "next/navigation";

interface FormData extends SuperDevs {
  confirmPassword: string;
}

interface FormErrors {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  full_name?: string;
  profile_picture?: string;
  professional_title?: string;
  summary?: string;
  github_profile?: string;
  linkedin_profile?: string;
  personal_website?: string;
  social_media_links?: string[];
}

const MinimalForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    id: 0,
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    full_name: "",
    profile_picture: "",
    professional_title: "",
    summary: "",
    github_profile: "",
    linkedin_profile: "",
    personal_website: "",
    social_media_links: [],
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);

      try {
        const response = await fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log("Registration successful");
          router.push("/login");
        } else {
          const errorData = await response.json();
          setErrors(errorData);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validate = (data: FormData): FormErrors => {
    let validationErrors: FormErrors = {};
    if (!data.username) validationErrors.username = "Username is required.";
    if (!data.email) validationErrors.email = "Email is required.";
    if (!data.password) validationErrors.password = "Password is required.";
    if (data.password !== data.confirmPassword)
      validationErrors.confirmPassword = "Passwords must match.";
    return validationErrors;
  };

  return (
    <div className="">
      <div className="p-8 lg:w-1/2 mx-auto">
        <div className="bg-slate-100 rounded-t-lg p-8">
          <div className="mb-4 flex flex-col items-center">
            <Image
              src={"/panaverse80_80.png"}
              alt="Picture of the author"
              width={80}
              height={80}
            />
            <h1 className="mb-2 text-3xl font-semibold text-black">
              Panaverse DAO
            </h1>
            {/* <span className="text-slate-700">
              Register by filling the details:
            </span> */}
          </div>
        </div>
        <div className="bg-slate-100 rounded-lg py-12 px-4 lg:px-24">
          <p className="text-center text-sm text-gray-500 font-light">
            Register by filling the details
          </p>
          <form onSubmit={handleSubmit} className="mt-6">
            <FormField
              id="full_name"
              name="full_name"
              type="text"
              value={formData.full_name}
              onChange={handleChange}
              error={errors.full_name}
              icon={fullNameIcon}
              placeholder="Full Name"
            />
            <FormField
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              icon={emailIcon}
              placeholder="Email"
            />
            <FormField
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              error={errors.username}
              icon={usernameIcon}
              placeholder="Username"
            />
            <FormField
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              icon={passwordIcon}
              placeholder="Password"
            />
            <FormField
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              icon={passwordIcon}
              placeholder="Confirm Password"
            />
            <FormField
              id="profile_picture"
              name="profile_picture"
              type="text"
              value={formData.profile_picture}
              onChange={handleChange}
              error={errors.profile_picture}
              icon={nameIcon}
              placeholder="Profile Picture URL"
            />
            <FormField
              id="professional_title"
              name="professional_title"
              type="text"
              value={formData.professional_title}
              onChange={handleChange}
              error={errors.professional_title}
              icon={titleIcon}
              placeholder="Title i.e (Full-Stack Dev)"
            />
            <p className="mt-4 italic text-gray-500 font-light text-xs">
              Password strength:
              <span className="font-bold text-green-400">strong</span>
            </p>
            <div className="mt-4 flex items-center text-gray-500">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="mr-2"
              />
              <label className="text-sm">
                I agree with the
                <a className="text-indigo-400 hover:text-indigo-500">
                  Privacy Policy
                </a>
              </label>
            </div>
            <div className="flex items-center justify-center mt-8">
              <button className="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MinimalForm;

interface FormFieldProps {
  id: string;
  type: string;
  placeholder: string;
  name: string;
  icon: JSX.Element;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const FormField = ({
  id,
  type,
  placeholder,
  name,
  icon,
  value,
  onChange,
  error,
}: FormFieldProps) => {
  return (
    <div className="relative mt-3">
      <input
        className={`appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline ${
          error ? "border-red-500" : ""
        }`}
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      <div className="absolute left-0 inset-y-0 flex items-center">{icon}</div>
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
};

const emailIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-7 ml-3 text-gray-400 p-1"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

const nameIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-7 ml-3 text-gray-400 p-1"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
  </svg>
);

const passwordIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-7 ml-3 text-gray-400 p-1"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
  </svg>
);

const fullNameIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-7 ml-3 text-gray-400 p-1"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M10 2a5 5 0 015 5v2a5 5 0 11-10 0V7a5 5 0 015-5zm0 10a3 3 0 100-6 3 3 0 000 6zm4 4H6a2 2 0 00-2 2v1h12v-1a2 2 0 00-2-2z" />
  </svg>
);

const usernameIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-7 ml-3 text-gray-400 p-1"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2V7a5 5 0 00-5-5zm2 7H8a2 2 0 00-2 2v5a2 2 0 002 2h4a2 2 0 002-2v-5a2 2 0 00-2-2z" />
  </svg>
);

const profilePictureIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-7 ml-3 text-gray-400 p-1"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M10 2a5 5 0 015 5v2a5 5 0 11-10 0V7a5 5 0 015-5zm0 10a3 3 0 100-6 3 3 0 000 6zm5 3a2 2 0 012 2v1H3v-1a2 2 0 012-2h8z" />
    <path d="M7 10h6v1H7v-1z" />
  </svg>
);

const titleIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-7 ml-3 text-gray-400 p-1"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M4 4h12a1 1 0 110 2H4a1 1 0 110-2zm0 4h8a1 1 0 110 2H4a1 1 0 110-2zm0 4h12a1 1 0 110 2H4a1 1 0 010-2z" />
  </svg>
);
