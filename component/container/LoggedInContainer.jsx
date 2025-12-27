import { React, useContext , memo, useState } from "react";
import SidebarMenu from "../sharedComponents/SidebarMenu";
import NavHeadings from "../sharedComponents/NavHeadings";
import ControlsComponent from "../sharedComponents/Controls";
import { songContext } from "../../context/songContext";
import CreatePlaylist from ".././CreatePlaylist";
import AddSongsToPlaylist from "../AddSongsToPlaylist";
import { Link } from "react-router-dom";
import {profileContext} from "../../context/profileContext";

const LoggedInContainer = memo(({children,currentScreen})=>{

  const {currentSong,showCreatePlaylist,setShowCreatePlaylist , showAddToPlaylist} = useContext(songContext);
  const {firstName,lastName} = useContext(profileContext);

  const changeState = () =>{
    setShowCreatePlaylist(true);
  }

  return (
    <>
    {showCreatePlaylist?(
        <CreatePlaylist/>
      ):<></>}
      {showAddToPlaylist?(
        <AddSongsToPlaylist/>
      ):<></>}
    <div className="flex relative w-screen h-screen">
      <div className={`${currentSong?"h-[90%]":"h-full"} w-full flex`}>
      <div className="h-full flex flex-col gap-8 w-1/6 justify-between bg-black">
        <div className="flex flex-col gap-12">
          <div className="flex pl-2 mt-4 items-center w-full">
            <Link to={"/home"}><img
              src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_White.png"
              alt="Spotify White Logo"
              width={150}
            /></Link>
          </div>
          <div className="pl-4 flex flex-col gap-6">
            <SidebarMenu iconName="mdi:home-outline" iconText="Home" link="/home" active={currentScreen==="Home"?true:false}/>
            <SidebarMenu iconName="material-symbols:search" iconText="Search" link="/search" active={currentScreen==="Search"?true:false} />
            <SidebarMenu
              iconName="material-symbols-light:library-music"
              iconText="Library" link="/library" active={currentScreen==="Library"?true:false}
            />
            <SidebarMenu iconName="entypo:music" link="/mysongs" iconText="My Music" active={currentScreen==="My Music"?true:false}/>
          </div>
          <div className="pl-4 pb-4 mt-4 flex flex-col gap-6">
            <SidebarMenu
              iconName={"subway:add-playlist"}
              iconText={"Create Playlist"}
              onClick={changeState}
            />
            <SidebarMenu iconName={"mdi:heart"} iconText={"Liked Songs"} active={currentScreen==="Liked Songs"} link="/likedsongs" />
          </div>
        </div>
        <div className="flex flex-col justify-center p-3">
          <div className="cursor-pointer px-3 py-2 w-2/3 rounded-full border border-white">
            <SidebarMenu
              iconName={"ic:baseline-language"}
              iconText={"English"}
            />
          </div>
        </div>
      </div>
      <div className="h-full flex flex-col w-5/6 bg-app-black">
        <div className="flex bg-black opacity-80 justify-end gap-8 p-5 items-center">
          <NavHeadings navText={"Premium"} />
          <NavHeadings navText={"Support"} />
          <div className="border-r-2 border-gray-400 pr-5">
            <NavHeadings navText={"Download"} />
          </div>
          <NavHeadings navText={"Upload Song"} link="/upload/song" />
          <button className="bg-white p-1 w-12 h-12 rounded-full text-center font-bold">
            {firstName[0] + lastName[0]}
          </button>
        </div>
        <div className="flex p-6 flex-col w-full overflow-auto">
          {children}
        </div>
      </div>
    </div>
    <div className={`absolute ${currentSong?"block":"hidden"} bottom-0 bg-app-black opacity-95 w-full h-[10%] left-0 p-3 z-10`}>
        <ControlsComponent/>        
    </div>
    </div>
    </>
  );
});

export default memo(LoggedInContainer);
