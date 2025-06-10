import type { SignupInput } from "@vaibhav-76/zod-inference-medium-blog";
import axios from "axios";
import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import {BACKENDURL} from "../../config"
const Auth = ({type} : {type : "signup" | "signin"}) => {

  const navigate = useNavigate();
  const [authInputs, setAuthInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });
  async function sendRequest() {
    try{
      const response = await axios.post(`${BACKENDURL}/api/v1/user/${type==="signin" ? 'signin' :'signup'}`);
      const token = response.data;
      localStorage.setItem("token",token);
      navigate("/blogs");
    }
    catch(e){
      alert(`Unable to ${type==='signin'? "signin" : "signup"}`);
    }

  }
  return (
    <div className="h-screen flex justify-center flex-col items-center">
      <div className="flex flex-col justify-center gap-y-4">
        <div className="flex flex-col px-20">
          <div className="text-3xl font-extrabold text-left mt-4 ">
            Create an account
          </div>
          <div className="font-semibold text-xl text-slate-400">
           { type==="signin"? "Don't have an account?" : "Already have an account? "}
            <Link to={type==="signup"? "/signin" : "/signup"} className="underline">
              {type==="signin" ? "Signup" : "SignIn"}
            </Link>
          </div>
        </div>
        <div>
          {type==="signup" && 
          <LabelledInput
            label="Name"
            placeholder="Enter your name!!"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setAuthInputs({
                ...authInputs,
                name: e.target.value,
              });
            }}
          />}
          <LabelledInput
            label="Username"
            placeholder="Enter your email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setAuthInputs({
                ...authInputs,
                email: e.target.value,
              });
            }}
          />
          <LabelledInput
            label="password"
            placeholder="Enter your password"
            type="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setAuthInputs({
                ...authInputs,
                password: e.target.value,
              });
            }}
          />

          <button
            type="button"
            className="text-white mt-6  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={sendRequest}
          >
           {type==="signup" ? "Sign Up" : "Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}
function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) {
  return (
    <>
      <div className="flex flex-col ">
        <label className="block mb-2 text-md text-slate-700      font-medium gap-2">
          {label}
        </label>
        <input
          type={type || "text"}
          id="name"
          className="bg-white border w-full text-black text-sm rounded-lg  focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          onChange={onChange}
          required
        />
      </div>
    </>
  );
}

export default Auth;
