import React from "react";
import { useState } from "react";
import TextInput from "./sharedComponents/TextInput";
import PasswordInput from "./sharedComponents/PasswordInput";
import { makeUnAuthorizedPostRequest } from "../utils/helper";
import { useCookies } from "react-cookie";
import { useNavigate , Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [cookies, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const emailNotMatchingError = () => toast.error("Email and Confirm Email Must Be Same.");
  const enterValidDetailsError = () => toast.error("Enter A Different Username / Email ID.");
  const fieldsMissingError = () => toast.error("Insufficient Details.");

  const date = new Date();
  date.setDate(date.getDate() + 30);

  const registerUser = async () => {
    if (email !== confirmEmail) return emailNotMatchingError();
    if(!email || !password || !confirmEmail || !username || !firstName || !lastName) return fieldsMissingError();
    const body = { email, password, username, firstName, lastName };
    const path = "/auth/register";
    const response = await makeUnAuthorizedPostRequest(path, body);
    if (response && !response.error) {
      setCookie('token',response.token,{
        path:'/',
        expires: date,
        // httpOnly: true,
        // Secure : true,  // sensitive information must not be shared over cookies hence json web tokens have been used.
        //we use secure so that the request in an https environment is directly sent to the server , adding an extra layer of security.
        // we use httpOnly so that the cookies cannot be accessed through javascript frontend, making it impossible to access and modify cookies.
      });
      return navigate("/home");
    }
    return enterValidDetailsError();
  };

  return (
    <div className="px-6 mt-4 h-full w-full">
      <div className="w-full border-b border-gray-300 flex items-center justify-center pb-2">
        <Link to={"/register"}><img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/800px-Spotify_logo_with_text.svg.png"
          alt="Spotify Logo"
          className="cursor-pointer"
          width={200}
        /></Link>
      </div>
      <div className="w-full flex items-center mt-4 justify-center">
        <h2 className="font-semibold text-md text-center">
          Sign up to the spotify.
        </h2>
      </div>
      <div className="flex mt-8 flex-col items-center justify-center gap-5 w-full">
        <TextInput
          id="username"
          value={username}
          setValue={setUsername}
          placeholder="Enter your username"
        />
        <div className="flex w-1/2 justify-center gap-2">
          <TextInput
            id="email"
            value={email}
            setValue={setEmail}
            placeholder="Enter your email address"
          />
          <TextInput
            id="confirmEmail"
            placeholder="Confirm your email address"
            value={confirmEmail}
            setValue={setConfirmEmail}
          />
        </div>
        <PasswordInput
          value={password}
          setValue={setPassword}
          id="password"
          placeholder="Enter your password"
        />
        <div className="w-1/2 flex flex-col justify-center gap-3">
          <div className="w-full flex justify-center gap-2">
            <TextInput
              id="firstName"
              value={firstName}
              setValue={setFirstName}
              placeholder="Enter your first name"
            />
            <TextInput
              id="lastName"
              value={lastName}
              setValue={setLastName}
              placeholder="Enter your last name"
            />
          </div>
        </div>
        <div className="w-1/2 flex justify-end items-center">
          <button onClick={(e) => {
            e.preventDefault();
            registerUser();
          }} className="w-1/6 text-sm font-semibold px-5 py-2 bg-green-400 text-white rounded-lg">
            SIGN UP
          </button>
        </div>
        <ToastContainer position="bottom-right"/>
      </div>
      <div className="w-full pb-4 flex flex-col gap-5 items-center mt-8 justify-center">
        <h2 className="font-semibold text-md text-center">
          Already have an account?
        </h2>
        <Link to={"/login"}><button
          className="w-full text-sm border border-gray-400 font-semibold px-5 py-3 rounded-lg uppercase"
        >
          Sign in to spotify
        </button></Link>
      </div>
    </div>
  );
};

export default RegisterComponent;
