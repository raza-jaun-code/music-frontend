import React, { useContext } from "react";
import { useState } from "react";
import TextInput from "./sharedComponents/TextInput";
import PasswordInput from "./sharedComponents/PasswordInput";
import { makeUnAuthorizedPostRequest } from "../utils/helper";
import { useCookies } from "react-cookie";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { profileContext } from "../context/profileContext";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookie, setCookies] = useCookies(["token"]);
  const navigate = useNavigate();
  const {setFirstName,setLastName} = useContext(profileContext);

  const detailsMissingError = () =>
    toast.error("Fill in all the required fields.");
  const invalidDetailsError = () => toast.error("Enter correct credentials.");

  const date = new Date();
  date.setDate(date.getDate() + 30);

  const loginUser = async () => {
    if (!email || !password) return detailsMissingError();
    const body = { email, password };
    const response = await makeUnAuthorizedPostRequest("/auth/login", body);
    if (response && !response.error) {
      setCookies("token", response.token, {
        path: "/",
        expires: date,
        // secure:true,
        // httpOnly:true,
      });
      setFirstName(response.firstName);
      setLastName(response.lastName);
      return navigate("/home");
    }
    return invalidDetailsError();
  };

  return (
    <div className="px-6 mt-8 h-full w-full">
      <div className="w-full border-b border-gray-300 flex items-center justify-center pb-6">
        <Link to={"/login"}><img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/800px-Spotify_logo_with_text.svg.png"
          alt="Spotify Logo"
          className="cursor-pointer"
          width={200}
        /></Link>
      </div>
      <div className="w-full flex items-center mt-4 justify-center">
        <h2 className="font-semibold text-md text-center">
          To continue, log in to Spotify.
        </h2>
      </div>
      <div className="flex mt-10 flex-col items-center justify-center gap-5 w-full">
        <TextInput
          id="email"
          value={email}
          setValue={setEmail}
          placeholder="Enter your email address"
        />
        <PasswordInput
          id="password"
          value={password}
          setValue={setPassword}
          placeholder="Enter your password"
        />
        <div className="w-1/2 flex justify-end items-center">
          <button
            onClick={(e) => {
              e.preventDefault();
              loginUser();
            }}
            className="w-1/6 text-sm font-semibold px-5 py-2 bg-green-400 text-white rounded-lg"
          >
            LOG IN
          </button>
        </div>
        <ToastContainer position="bottom-right" />
      </div>
      <div className="w-full flex flex-col gap-5 items-center mt-8 justify-center">
        <h2 className="font-semibold text-md text-center">
          Don't have an account?
        </h2>
        <Link to={"/register"}><button className="w-full text-sm border border-gray-400 font-semibold px-5 py-3 rounded-lg uppercase">
          Sign up for spotify
        </button></Link>
      </div>
    </div>
  );
};

export default LoginComponent;
