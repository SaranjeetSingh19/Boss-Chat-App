import React from "react";
import GenderBoxCompo from "./GenderBoxCompo";

const SignUp = () => {
  return (
    <div className="flex flex-col  justify-center items-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
        <h1 className="text-gray-500 font-semibold text-center mb-6 text-2xl">
          Sign Up <span className="text-blue-400">BossChat</span>
        </h1>
        <form action="">
          <div>
            <label className="label p-2">
              <span className="text-gray-700 font-semibold text-lg label-text">
                {" "}
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-gray-700 font-semibold text-lg label-text">
                {" "}
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-gray-700 font-semibold text-lg label-text">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-gray-700 font-semibold text-lg label-text">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Confirm Password"
              className="w-full input input-bordered h-10"
            />
          </div>
             <GenderBoxCompo />
          <a
            href="#"
            className="text-sm  text-gray-700 font-semibold hover:underline hover:text-blue-700 mt-4 ml-1 inline-block"
          >
            Already have an account?
          </a>

          <button className="btn btn-block btn-sm mt-4 bg-blue-300 text-blue-800   hover:text-gray-400">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
