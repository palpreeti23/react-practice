import React, { useEffect, useState } from "react";
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import { Logo, Input, Button } from "./index";
import { useForm } from "react-hook-form";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { register, submithandle } = useForm();

  const login = async (data) => {
    try {
      setError("");
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin(userData));
          navigate("/");
        }
      }
    } catch (error) {
      throw error.message;
    }
  };

  return (
    <div className="bg-white border-2 w-[60%] h-auto">
      <div className="flex flex-wrap">
        <div className="text-center">
          <Logo />
        </div>
        <h2 className="text-black font-medium text-center my-1 ">
          sign in to your account
        </h2>

        <h3 className="text-gray-800 text-center font-medium mb-1">
          Dont have an account?
          <Link to="/Signup">
            <span className="text-gray-700 font-light text-base"> Signup</span>
          </Link>
        </h3>
        {error && (
          <p className="text-red-800 text-center font-medium">{error}</p>
        )}
        <form onSubmit={submithandle(login())} className="w-full">
          <Input
            label="Email"
            type="email"
            placeholder="Enter your Email"
            className="w-full py-2 px-3 border rounded-xl"
            {...register("email", {
              required: true,
              validate: {
                matchPatern: (value) =>
                  /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) ||
                  "the email address should be validated address",
              },
            })}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            className="w-full py-2 px-3 border rounded-xl"
            {...register("password", {
              required: true,
            })}
          />

          <Button
            type="submit"
            className="bg-blue-600 py-2 px-3 my-2 text-center active:bg-blue-700 hover:border hover:bg-blue-500"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
