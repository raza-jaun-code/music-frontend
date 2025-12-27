import React, { useContext, useState , useEffect } from 'react';
import { songContext } from '../context/songContext';
import { makeAuthorizedGetRequest, makeAuthorizedPostRequest } from '../utils/helper';
import Card from './sharedComponents/Card';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const songAddSuccessful = ()=> toast.success("The song has been added to the playlist.")
const songAddError = ()=> toast.error("There was an error adding the  song to the playlist.")

const AddSongsToPlaylist = () => {

    const [addToPlaylistData,setAddToPlaylistData] = useState([]);

    useEffect(()=>{
        const getPlaylistData = async()=>{
        const path = '/playlist/getmyplaylists';
        const response = await makeAuthorizedGetRequest(path);
        setAddToPlaylistData(response.playlists);
    }
    getPlaylistData();
  },[])

  
  const {setShowAddToPlaylist,currentSong} = useContext(songContext);
  
  const addSongToPlaylist = async(playlistId)=>{
    const songId = currentSong._id;
    const body = {playlistId,songId};
    const path = '/playlist/add/song';
    const response = await makeAuthorizedPostRequest(path,body);
    if(response && !response.error){
        songAddSuccessful();
        setTimeout(()=>{setShowAddToPlaylist(false)},6000);
        return;
    }
    songAddError();
    return;
  }

  return (
    <div className='absolute w-full h-full top-0 left-0 z-20 bg-opacity-50 bg-gray-400 flex items-center justify-center'     onClick={()=>{
      setShowAddToPlaylist(false);
    }}>
    <div className='w-3/4 h-3/4 bg-black rounded-lg' onClick={(e)=>{
      e.stopPropagation();
    }}>
        <h2 className='text-white text-xl font-bold p-4'>Select Playlist</h2>
        <div className='w-full grid grid-cols-4 place-items-center'>
            {addToPlaylistData.map((item)=>{
                return(<Card key={item._id} imgSource={item.thumbnail} cardTitle={item.name} playlist className="cursor-pointer" addSongToPlaylist={addSongToPlaylist} playlistId={item._id} />)
            })}
        </div>
        <ToastContainer position='bottom-right'/>
    </div>
    </div>
  )
}

export default AddSongsToPlaylist;