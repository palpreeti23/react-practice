import React, { useState } from "react";
import appwriteService from "../appwrite/conf";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";
import { Input, Button, Logo } from "./index";

function Signup() {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, submithandle } = useForm();

  const create = async () => {
    try {
      setError("");
      const session = await appwriteService.createAccount(userData);
      if (session) {
        const userData = await authService.login(userData);
        if (userData) {
          dispatch(login(userData));
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
          signup to create your account
        </h2>

        <h3 className="text-gray-800 text-center font-medium mb-1">
          already have an account?
          <Link to="/Signup">
            <span className="text-gray-700 font-light text-base"> Signin</span>
          </Link>
        </h3>
        {error && (
          <p className="text-red-800 text-center font-medium">{error}</p>
        )}
        <form onSubmit={submithandle(create())} className="w-full">
          <Input
            label="Name"
            type="name"
            placeholder="Enter your name"
            className="w-full py-2 px-3 border rounded-xl"
            {...register("name", {
              required: true,
            })}
          />

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
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
