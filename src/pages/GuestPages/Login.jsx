import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { googleLogin, emailLogin} = useAuth()
  const navigate = useNavigate()

  const from = location?.state?.from?.pathname || "/user"
  
  const handleGoogleLogin = async() => {
    await googleLogin()
  }

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required!")
      .min(6, "Password must be at least 6 characters"),
    email: Yup.string().required("Email is required!"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = async (data) => {
    await emailLogin(data.email, data.password)
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl border">
        <h1 className="text-3xl font-semibold text-center text-purple-700">
          Sign in
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="john@smith.com"
            />
            <p className="text-red-600">{errors.email?.message}</p>
          </div>
          <div className="mb-2 relative">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              {...register("password")}
              type={`${showPassword ? "text" : "password"}`}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="********"
            />
            <p className="text-red-600">{errors.password?.message}</p>
            <p className="text-2xl text-purple-700 absolute cursor-pointer right-4 top-9">
              {!showPassword ? (
                <BiShow onClick={() => setShowPassword(true)} />
              ) : (
                <BiHide onClick={() => setShowPassword(false)} />
              )}
            </p>
          </div>

          <Link to="/" className="text-xs text-purple-600 hover:underline">
            Forget Password?
          </Link>
          <div className="mt-6">
            <button
            //   disabled={errors.length|| isAuthLoading}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
               {/* {isAuthLoading?'Loading...':'Login'} */} login
            </button>
            <p className="py-2 text-md text-center">or</p>
            <button onClick={handleGoogleLogin} type="button" class="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2"><svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign up with Google<div></div></button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-purple-600 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;