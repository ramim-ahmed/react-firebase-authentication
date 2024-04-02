import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function LoginForm() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const { login } = useAuth();
  const handleLoginUser = (data) => {
    const { email, password } = data;
    login(email, password);
    navigate(-1 || "");
    reset();
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(handleLoginUser)}
        className=" bg-white rounded-lg 
    p-8 flex flex-col md:ml-auto mt-10 md:mt-0 relative z-10 shadow-md"
      >
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
          Login Now!
        </h2>

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

        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Login
        </button>
        <p className="text-xs text-gray-500 mt-3">
          create one ? <Link to="/sign-up">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}
