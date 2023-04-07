"use client";
import Image from "next/image";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  public_name: string;
  public_email: string;
  bio: string;
  profile_pic: string;
  is_email_public: boolean;
  is_name_public: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  public_name?: string;
  public_email?: string;
  bio?: string;
  profile_pic?: string;
  is_email_public?: boolean;
  is_name_public?: boolean;
}

const RegistrationPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    public_name: "",
    public_email: "",
    bio: "",
    profile_pic: "",
    is_email_public: false,
    is_name_public: false,
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
          // Navigate to the homepage or another page after successful registration
          // router.push("/");
          console.log("Registration successful");
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
    if (!data.name) validationErrors.name = "Username is required.";
    if (!data.email) validationErrors.email = "Email is required.";
    if (!data.password) validationErrors.password = "Password is required.";
    if (data.password !== data.confirmPassword)
      validationErrors.confirmPassword = "Passwords must match.";
    return validationErrors;
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
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
            <span className="text-gray-300">Enter Registration Details:</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 text-lg">
              <input
                className={`rounded-3xl border-none bg-gray-400 bg-opacity-50 px-6 py-2  text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md ${
                  errors.name ? "border-red-600 border-2" : ""
                }`}
                type="text"
                name="name"
                placeholder="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>

            <div className="mb-4 text-lg">
              <input
                className={`rounded-3xl border-none bg-gray-400 bg-opacity-50 px-6 py-2  text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md ${
                  errors.email ? "border-red-600 border-2" : ""
                }`}
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            <div className="mb-4 text-lg">
              <input
                className={`rounded-3xl border-none bg-gray-400 bg-opacity-50 px-6 py-2  text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md ${
                  errors.password ? "border-red-600 border-2" : ""
                }`}
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
            </div>

            <div className="mb-4 text-lg">
              <input
                className={`rounded-3xl border-none bg-gray-400 bg-opacity-50 px-6 py-2  text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md ${
                  errors.confirmPassword ? "border-red-600 border-2" : ""
                }`}
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword}</p>
              )}
            </div>

            <div className="mb-4 text-lg">
              <input
                className={`rounded-3xl border-none bg-gray-400 bg-opacity-50 px-6 py-2  text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md ${
                  errors.public_name ? "border-red-600 border-2" : ""
                }`}
                type="text"
                name="public_name"
                placeholder="Public Name"
                value={formData.public_name}
                onChange={handleChange}
              />
              {errors.public_name && (
                <p className="text-red-500">{errors.public_name}</p>
              )}
            </div>

            <div className="mb-4 text-lg">
              <input
                className={`rounded-3xl border-none bg-gray-400 bg-opacity-50 px-6 py-2  text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md ${
                  errors.public_email ? "border-red-600 border-2" : ""
                }`}
                type="text"
                name="public_email"
                placeholder="Public Email"
                value={formData.public_email}
                onChange={handleChange}
              />
              {errors.public_email && (
                <p className="text-red-500">{errors.public_email}</p>
              )}
            </div>

            <FormField
              name="bio"
              type="text"
              placeholder="Bio"
              value={formData.bio}
              onChange={handleChange}
              // errors={errors.bio}
            />

            <FormField
              name="profile_pic"
              type="text"
              placeholder="Profile Pic"
              value={formData.profile_pic}
              onChange={handleChange}
              // errors={errors.profile_pic}
            />

            <div className="mb-4 text-lg flex items-center">
              <input
                className={`rounded-3xl border-none bg-gray-400 bg-opacity-50 px-6 py-2  text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md ${
                  errors.is_email_public ? "border-red-600 border-2" : ""
                }`}
                type="checkbox"
                name="is_email_public"
                placeholder="Is Email Public"
                checked={formData.is_email_public}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    is_email_public: e.target.checked,
                  })
                }
              />
              <label className="ml-2 text-white" htmlFor="is_email_public">
                Make email public
              </label>

              {errors.is_email_public && (
                <p className="text-red-500">{errors.is_email_public}</p>
              )}
            </div>

            <div className="mb-4 text-lg flex items-center">
              <input
                className={`rounded-3xl border-none bg-gray-400 bg-opacity-50 px-6 py-2  text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md ${
                  errors.is_name_public ? "border-red-600 border-2" : ""
                }`}
                type="checkbox"
                name="is_name_public"
                placeholder="Is Name Public"
                checked={formData.is_name_public}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    is_name_public: e.target.checked,
                  })
                }
              />
              <label className="ml-2 text-white" htmlFor="is_name_public">
                Make name public
              </label>

              {errors.is_name_public && (
                <p className="text-red-500">{errors.is_name_public}</p>
              )}
            </div>

            <div className="mt-8 flex justify-center text-lg text-black">
              <button
                type="submit"
                className="rounded-3xl bg-gray-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-gray-300 hover:text-black"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;

interface FormFieldProps {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const FormField = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
}: FormFieldProps) => {
  return (
    <div className="mb-4 text-lg">
      <input
        className={`rounded-3xl border-none bg-gray-400 bg-opacity-50 px-6 py-2  text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md ${
          error ? "border-red-600 border-2" : ""
        }`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};
