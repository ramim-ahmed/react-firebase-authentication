import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
export default function SignUpForm() {
  const [passwordMatchError, setpasswordMatchError] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const { signup, firebaseError, authSuccess } = useAuth();
  const handleSignUpUser = async (data) => {
    const { email, password, username, confirmPassword } = data;
    setpasswordMatchError("");
    if (password !== confirmPassword) {
      return setpasswordMatchError("password does't match!");
    }
    signup(email, password, username);
    reset();
  };
  return (
    <div className="container px-5 py-24 mx-auto max-w-md">
      <form
        onSubmit={handleSubmit(handleSignUpUser)}
        className=" bg-white rounded-lg 
  p-8 flex flex-col md:ml-auto mt-10 md:mt-0 relative z-10 shadow-md"
      >
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
          Create New Account!
        </h2>
        {authSuccess && (
          <div className="flex items-center space-x-1 my-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-green-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <h1 className=" text-green-600 font-normal">
              {"Account Created Successfully!"}{" "}
              <Link className="border-b border-green-600" to="/login">
                Login Now
              </Link>
            </h1>
          </div>
        )}
        {firebaseError && (
          <div className="flex items-center space-x-1 my-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-red-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
              />
            </svg>

            <h1 className=" text-red-600 font-normal">{firebaseError}</h1>
          </div>
        )}
        {passwordMatchError && (
          <div className="flex items-center space-x-1 my-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-red-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
              />
            </svg>

            <h1 className=" text-red-600 font-normal">{passwordMatchError}!</h1>
          </div>
        )}
        <div className="relative mb-4">
          <label htmlFor="username" className="leading-7 text-sm text-gray-600">
            username
          </label>
          <input
            {...register("username", { required: true })}
            type="text"
            id="username"
            name="username"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="password" className="leading-7 text-sm text-gray-600">
            Password
          </label>
          <input
            {...register("password", { required: true, minLength: 6 })}
            type="password"
            id="password"
            name="password"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="confirmPassword"
            className="leading-7 text-sm text-gray-600"
          >
            Confirm Password
          </label>
          <input
            {...register("confirmPassword", { required: true, minLength: 6 })}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Sigp Up
        </button>
        <p className="text-xs text-gray-500 mt-3">
          already have an account ? <Link to="/login">login</Link>
        </p>
      </form>
    </div>
  );
}
