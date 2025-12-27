import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "./sharedComponents/TextInput";
import CloudinaryUploadComponent from "./sharedComponents/CloudinaryUpload";
import { makeAuthorizedPostRequest } from "../utils/helper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoggedInContainer from "./container/LoggedInContainer";

const successUpload = () =>
  toast.success("The song was uploaded successfully.");
const failureUpload = () =>
  toast.error("There was an error uploading the song.");
const fieldsMissingError = () => toast.error("Insufficient Details.");

const UploadSongComponent = () => {
  
  const [songName, setSongName] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [fileName, setFileName] = useState("");
  const [track, setTrack] = useState("");
  const navigate = useNavigate("");

  const uploadSong = async () => {
    const body = { name: songName, thumbnail, track };

    if (!songName || !thumbnail || !track) return fieldsMissingError();

    const path = "/song/create";
    const response = await makeAuthorizedPostRequest(path, body);

    if (response && !response.error) {
      setFileName("");
      setTrack("");
      setSongName("");
      setThumbnail("");
      successUpload();
      return setTimeout(()=>{
        navigate("/home")
      },5000);
    }

    return failureUpload();
  };

  return (
    <LoggedInContainer>
    <h2 className="text-white text-2xl font-bold">Upload Your Music</h2>
          <div className="mt-10 flex items-center gap-3">
            <TextInput
              id={"name"}
              value={songName}
              setValue={setSongName}
              placeholder={"Enter the song name"}
              className="text-white"
            />
            <TextInput
              id={"thumbnail"}
              value={thumbnail}
              setValue={setThumbnail}
              placeholder={"Upload the image URL here"}
              className="text-white"
            />
          </div>
          <CloudinaryUploadComponent
            fileName={fileName}
            setTrack={setTrack}
            setFileName={setFileName}
          />
          {fileName ? (
            <h2 className="mt-6 text-white capitalize font-bold text-sm">
              {fileName} ✔️
            </h2>
          ) : (
            <></>
          )}
          <button
            className="border mt-6 border-white px-5 py-2 text-center text-md font-bold text-white rounded-full"
            onClick={(e) => {
              e.preventDefault();
              uploadSong();
            }}
          >
            Upload the Song
          </button>
          <ToastContainer position="bottom-right" />
    </LoggedInContainer>
  );
};

export default UploadSongComponent;
