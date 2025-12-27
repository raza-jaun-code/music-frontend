import React from "react";
import SidebarMenu from "./sharedComponents/SidebarMenu";
import NavHeadings from "./sharedComponents/NavHeadings";
import PlaylistView from "./ReusableComponents/PlaylistView";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginFirst = ()=> toast.warning("Login First To See These Pages.");

const HomeComponent = () => {

  const data = [{
    imageSource: 'https://t3.ftcdn.net/jpg/06/86/28/16/360_F_686281636_u9Xp5MgKIK7ReHMZ1PTMS2q4TTTprwxY.jpg',
    cardTitle: 'Peaceful Piano',
    cardDescription:'Relax and indulge with beautiful piano places',
  },{
    imageSource: 'https://t3.ftcdn.net/jpg/06/86/28/16/360_F_686281636_u9Xp5MgKIK7ReHMZ1PTMS2q4TTTprwxY.jpg',
    cardTitle: 'Peaceful Piano',
    cardDescription:'Relax and indulge with beautiful piano places',
  },{
    imageSource: 'https://t3.ftcdn.net/jpg/06/86/28/16/360_F_686281636_u9Xp5MgKIK7ReHMZ1PTMS2q4TTTprwxY.jpg',
    cardTitle: 'Peaceful Piano',
    cardDescription:'Relax and indulge with beautiful piano places',
  },{
    imageSource: 'https://t3.ftcdn.net/jpg/06/86/28/16/360_F_686281636_u9Xp5MgKIK7ReHMZ1PTMS2q4TTTprwxY.jpg',
    cardTitle: 'Peaceful Piano',
    cardDescription:'Relax and indulge with beautiful piano places',
  }]

  return (
    <div className="flex w-screen h-screen">
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
            <SidebarMenu iconName="mdi:home-outline" iconText="Home" active link={"/home"} />
            <SidebarMenu iconName="material-symbols:search" iconText="Search" onClick={()=>{
              LoginFirst();
            }}/>
            <SidebarMenu
              iconName="material-symbols-light:library-music"
              iconText="Library"
            onClick={()=>{
              LoginFirst();
            }}/>
          </div>
          <div className="pl-4 pb-4 flex flex-col gap-6">
            <SidebarMenu
              iconName={"subway:add-playlist"}
              iconText={"Create Playlist"}
              onClick={()=>{
                LoginFirst();
              }}/>
            <SidebarMenu iconName={"mdi:heart"} iconText={"Liked Songs"} onClick={()=>{
              LoginFirst();
            }} />
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
          <NavHeadings navText={"Sign up"} />
          <Link to={"/login"}><button className="bg-white px-8 py-2 rounded-full text-center font-bold">
            Log in
          </button></Link>
        </div>
        <div className="flex p-6 flex-col w-full overflow-auto">
          <PlaylistView playlistTitle={"Focus"} cardsData={data}/>
        </div>
      </div>
      <ToastContainer position="bottom-right"/>
    </div>
  );
};

export default HomeComponent;
