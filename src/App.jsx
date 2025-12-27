import "./App.css";
import LoginComponent from "../component/Login.jsx";
import RegisterComponent from "../component/Register.jsx";
import LoggedInHomeComponent from "../component/LoggedInHome.jsx";
import HomeComponent from "../component/Home.jsx";
import { BrowserRouter, Routes, Route , Navigate } from "react-router-dom";
import {Howl,Howler} from 'howler';
import { songContext } from "../context/songContext.js";
import { profileContext } from "../context/profileContext.js";
import { useCookies } from "react-cookie";
import UploadSongComponent from "../component/UploadSong.jsx";
import MyMusicComponent from "../component/MyMusic.jsx";
import SearchComponent from "../component/Search.jsx";
import SongsInPlaylist from "../component/sharedComponents/SongsInPlaylist.jsx";
import { useEffect, useState } from "react";
import LibraryComponent from "../component/Library.jsx";
import LikedSongs from "../component/LikedSongs.jsx";

const App = () => {
  const [cookies,setCookie] = useCookies(['token']);
  const [currentSong, setCurrentSong] = useState(null);
  const [soundPlayed,setSoundPlayed] = useState(null);
  const [isPaused,setIsPaused] = useState(true);
  const [showCreatePlaylist,setShowCreatePlaylist] = useState(false);
  const [showAddToPlaylist,setShowAddToPlaylist] = useState(false);
  const [clickedPlaylistSongData,setClickedPlaylistSongData] = useState([]);
  const [isSongLiked,setIsSongLiked] = useState(false);
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");

  useEffect(()=>{
    if(!currentSong) return;
    playSound(currentSong.track);
  },[currentSong]);

  const playSound = (songName)=>{

    if(soundPlayed){
        soundPlayed.stop()
    }
    let sound = new Howl({
    src: [songName],
    html5: true
    
  });
  
  setSoundPlayed(sound)
  sound.play()
  setIsPaused(false)
}

const togglePlayPause = () =>{
  if(soundPlayed && !isPaused){
    soundPlayed.pause();
    setIsPaused(true);
    return;
  }
  soundPlayed.play();
  setIsPaused(false);
  return;
}

  return (
    <div className="h-full w-full">
      <BrowserRouter>
      <profileContext.Provider value={{firstName,lastName,setFirstName,setLastName}}>
      {cookies.token ? 
          <songContext.Provider value={{currentSong,setCurrentSong,togglePlayPause,isPaused,showCreatePlaylist,setShowCreatePlaylist,showAddToPlaylist,setShowAddToPlaylist,clickedPlaylistSongData,setClickedPlaylistSongData,isSongLiked,setIsSongLiked}}>
        <Routes>
          <Route path="/home" element={<LoggedInHomeComponent />} />
          <Route path="/upload/song" element={<UploadSongComponent/>}/>
          <Route path="/mysongs" element={<MyMusicComponent/>}/>
          <Route path="/search" element={<SearchComponent/>}/>
          <Route path="/library" element={<LibraryComponent/>}/>
          <Route path="/playlist/song" element={<SongsInPlaylist/>}/>
          <Route path="/likedsongs" element={<LikedSongs/>}/>
          <Route path="*" element={<Navigate to={"/home"}/>}/>
        </Routes>
          </songContext.Provider>
       : 
        <Routes>
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/home" element={<HomeComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
          <Route path="*" element={<Navigate to={"/login"}/>}/>
        </Routes>
      }
      </profileContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
