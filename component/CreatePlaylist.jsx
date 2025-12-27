import React, { useContext, useState } from 'react';
import TextInput from './sharedComponents/TextInput';
import { songContext } from '../context/songContext';
import { makeAuthorizedPostRequest } from '../utils/helper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const playlistCreationError = () => toast.error("There was an error creating the playlist.");
const playlistCreationSuccessful = () => toast.success("Playlist was created successfully.");

const CreatePlaylist = () => {

  const [playlistName,setPlaylistName] = useState("");
  const [thumbnailURL,setThumbnailURL] = useState("");
  const {setShowCreatePlaylist} = useContext(songContext);

  const newPlaylist = async()=>{
    const path = '/playlist/create';
    const body = {name:playlistName,thumbnail:thumbnailURL};
    const response = await makeAuthorizedPostRequest(path,body);
    if(response && !response.error){
      playlistCreationSuccessful();
      setPlaylistName("");
      setThumbnailURL("");
      setTimeout(()=>{setShowCreatePlaylist(false)},6000)
      return;
    }
    playlistCreationError();
    return;
  }

  return (
    <div className='absolute w-full h-full top-0 left-0 z-20 bg-opacity-50 bg-gray-400 flex items-center justify-center'     onClick={()=>{
      setShowCreatePlaylist(false);
    }}>
    <div className='w-1/3 h-1/2 bg-black rounded-lg' onClick={(e)=>{
      e.stopPropagation();
    }}>
        <div className='w-full flex flex-col items-center justify-center gap-5 px-4 py-8'>
        <TextInput id="playlistName" placeholder="Enter The Playlist Name" value={playlistName} setValue={setPlaylistName} widthFull className="text-white"/>
        <TextInput id="playlistThumbnail" placeholder="Thumbnail URL" value={thumbnailURL} setValue={setThumbnailURL} widthFull className="text-white"/>
        <button className='bg-white w-1/2 self-center px-2 py-3 rounded-full font-semibold' onClick={(e)=>{
            e.preventDefault();
            newPlaylist();
        }}>Create Playlist</button>
        </div>
        <ToastContainer position='bottom-right'/>
    </div>
    </div>
  )
}

export default CreatePlaylist;