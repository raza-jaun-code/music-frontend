import React from "react";
import { Icon } from "@iconify/react";
import { useContext } from "react";
import { songContext } from "../../context/songContext.js";
import { makeAuthorizedPostRequest } from "../../utils/helper.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const songLikedSuccessful= () => toast.success("Successfully added to liked songs.")
const songLikedError= () => toast.error("Error adding the song to the liked songs.")

const ControlsComponent = () => {
  const { currentSong, togglePlayPause , isPaused , setShowAddToPlaylist, isSongLiked , setIsSongLiked } = useContext(songContext);

  const addToLikedSongs = async(songID)=>{
    const path = '/song/add/likedsongs';
    const body = {songID};
    const response = await makeAuthorizedPostRequest(path,body);
    if(response && !response.err){
      songLikedSuccessful();
      return;
    }
    songLikedError();
    return;
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <img
            src={currentSong?.thumbnail}
            alt="Song Thumbnail"
            width={40}
            className="rounded-lg"
          />
          <div className="flex flex-col justify-center gap-1">
            <h2 className="text-white font-bold text-sm">
              {currentSong?.name}
            </h2>
            <h4 className="text-gray-400 font-bold text-xs">
              {currentSong?.artist?.firstName +
                " " +
                currentSong?.artist?.lastName}
            </h4>
          </div>
        </div>
        <div className="flex items-center justify-center gap-8">
          <Icon
            icon="mingcute:shuffle-fill"
            className="cursor-pointer"
            fontSize={25}
            color="gray"
          />
          <Icon
            icon="mdi:rewind"
            fontSize={25}
            color="gray"
            className="cursor-pointer"
          />
          <Icon
            icon={`${isPaused?"gridicons:play":"gridicons:pause"}`}
            fontSize={40}
            className="cursor-pointer"
            onClick={() => {
              togglePlayPause();
            }}
            color="gray"
          />
          <Icon
            icon="iconoir:forward-solid"
            className="cursor-pointer"
            fontSize={25}
            color="gray"
          />
          <Icon
            icon="mdi:loop"
            fontSize={25}
            className="cursor-pointer"
            color="gray"
          />
        </div>
        <div className="flex items-center justify-end gap-3">
          <Icon icon="mdi:heart-outline" className="cursor-pointer" fontSize={25} color={`${isSongLiked?"red":"gray"}`} onClick={()=>{
            setIsSongLiked(!isSongLiked);
            addToLikedSongs(currentSong._id);
          }}/>
          <Icon icon="ic:baseline-playlist-add" fontSize={25} color="gray" className="cursor-pointer" onClick={()=>{
            setShowAddToPlaylist(true);
          }}/>
        </div>
      </div>
      <ToastContainer position="bottom-right"/>
    </>
  );
};

export default ControlsComponent;
