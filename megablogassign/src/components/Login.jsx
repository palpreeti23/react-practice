import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/storeSlice";
import authService from "../appwrite/auth";
import { Link } from "react-router-dom";
import { Button, Input, Logo } from "./index";
import { useForm } from "react-hook-form";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const { register, handleSubmit } = useForm();

  const login = async (data) => {
    try {
      setError("");
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (!userData) {
          console.log("user not logged in");
          return;
        }
        dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-gray-200 border-2 rounded-3xl w-2/5 py-4">
        <div className="flex flex-col flex-wrap items-center">
          <div className="py-3 ">
            <Logo className="h-13 w-20" />
          </div>
          <h2 className="text-black font-base text-center my-2 px-2">
            Sign in to your account
          </h2>

          <h3 className="text-gray-950 text-center font-base mb-2 ">
            Dont have an account?
            <Link to="/Signup">
              <span className="text-gray-600 font-base text-medium ml-1 hover:text-gray-800">
                Signup
              </span>
            </Link>
          </h3>
          {error && (
            <p className="text-red-800 text-center font-medium">{error}</p>
          )}
          <form onSubmit={handleSubmit(login)} className="w-full">
            <Input
              label="Email"
              type="email"
              placeholder="Enter your Email"
              className="rounded-xl"
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
              className=" rounded-xl mb-3"
              {...register("password", {
                required: true,
              })}
            />

            <Button
              type="submit"
              className="bg-blue-600 my-2 text-center active:bg-blue-700 hover:border-2 hover:bg-blue-800 mt-3"
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
