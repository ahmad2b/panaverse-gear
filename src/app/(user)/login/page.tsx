"use client";
import { useState, FormEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useUser } from "../UserContext";

// const fetcher = (url: string) =>
//   fetch(url, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({}),
//   }).then((res) => res.json());

interface FormData {
  username: string;
  password: string;
}

const page = () => {
  const { setUser } = useUser();
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Sending Request to the API with Data");
    console.log(formData);
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      // Redirect to user profile page
      setUser(data[0]);
      router.push(`/user/${data[0].name}`);
      console.log("Login successful");
      console.log(data);
    } else {
      // Display error message
      console.error("Login failed");
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center ">
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <Image
              src={"/panaverse80_80.png"}
              alt="Picture of the author"
              width={80}
              height={80}
            />
            <h1 className="mb-2 text-2xl">Panaverse DAO</h1>
            <span className="text-gray-300">Enter Login Details:</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-gray-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="text"
                name="username"
                placeholder="username"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
            </div>

            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-gray-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="password"
                name="password"
                placeholder="*********"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
            <div className="mt-8 flex justify-center text-lg text-black">
              <button
                type="submit"
                className="rounded-3xl bg-gray-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-gray-300 hover:text-black"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;

// After user clicks Login, if not successful, display error message (not registered or incorrect password)
// If successful, display message "Login Successful" and redirect to new dynamic page using fetched username
// On that page display the user profile
