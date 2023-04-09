"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/(user)/UserContext";

interface FormData {
  username: string;
  password: string;
}

const LoginForm = () => {
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
      console.log("Data recieved from Database about User", data);
      setUser(data[0]);
      localStorage.setItem("sessionToken", data[1].sessionToken);
      console.log("USERNAME", data[0][0].username);
      router.push(`/user/${data[0][0].username}`);
      console.log("Login successful");
      console.log(data);
    } else {
      console.error("Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4 text-lg  rounded-md">
        <input
          className="rounded-lg border border-slate-300 bg-slate-400 bg-opacity-50 px-6 py-3 text-inherit placeholder-slate-200 shadow-lg focus:bg-slate-300 focus:bg-opacity-50 backdrop-blur-md hover:border-slate-400"
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
          className="rounded-lg border border-slate-300 bg-slate-400 bg-opacity-50 px-6 py-3 text-inherit placeholder-slate-200 shadow-lg focus:bg-slate-300 focus:bg-opacity-50 backdrop-blur-md hover:border-slate-400"
          type="password"
          name="password"
          placeholder="*********"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
      </div>
      <div className="mt-8 flex justify-center  text-black">
        <button
          type="submit"
          className="rounded-md border border-slate-300 bg-slate-400 bg-opacity-50 px-8 py-3 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-slate-500 hover:border-slate-500 hover:text-white"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
