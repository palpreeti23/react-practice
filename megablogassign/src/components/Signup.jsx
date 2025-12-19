import React, { useState } from "react";
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { login } from "../store/storeSlice";
import { useForm } from "react-hook-form";

function Signup() {
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    try {
      setError("");
      const session = await authService.createAccount(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login(userData));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center mt-3">
      <div className="bg-gray-200 border-2 w-2/5 h-auto rounded-2xl py-3">
        <div className="flex flex-wrap flex-col items-center">
          <div className="text-center py-3 mt-2">
            <Logo className="h-13 w-20" />
          </div>
          <h2 className="text-black font-medium text-center my-3 ">
            Signup to create your account
          </h2>

          <h3 className="text-gray-800 text-center font-medium mb-3">
            Already have an account?
            <Link to="/Signup">
              <span className="text-gray-800 font-light text-base hover:text-black hover:font-medium">
                Sign in
              </span>
            </Link>
          </h3>
          {error && (
            <p className="text-red-800 text-center font-medium">{error}</p>
          )}
          <form onSubmit={handleSubmit(create)} className="w-full">
            <Input
              label="Name"
              type="name"
              placeholder="Enter your name"
              className=" rounded-xl"
              {...register("name", {
                required: true,
              })}
            />

            <Input
              label="Email"
              type="email"
              placeholder="Enter your Email"
              className=" rounded-xl"
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
              className=" rounded-xl"
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
    </div>
  );
}

export default Signup;
