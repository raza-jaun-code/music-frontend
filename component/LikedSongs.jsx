import React, { useEffect, useState } from 'react';
import LoggedInContainer from './container/LoggedInContainer';
import { makeAuthorizedGetRequest } from '../utils/helper';
import MyMusicCard from './sharedComponents/MyMusicCard';

const LikedSongs = () => {

  const [likedSongs,setLikedSongs] = useState([]);

  useEffect(()=>{
        const getLikedSongs = async ()=>{
            const path = '/song/get/lovedsongs';
            const response = await makeAuthorizedGetRequest(path);
            if(response && !response.error){
                setLikedSongs(response);
                return;
            }
            return;
        }
        getLikedSongs();
  },[])

  return (
    <LoggedInContainer currentScreen={"Liked Songs"}>
        <h2 className='text-white text-2xl font-bold'>Loved Songs</h2>
        {likedSongs.length!==0?likedSongs.map((item)=>{
            return(
            <MyMusicCard key={item._id} item={item}/>)
        }):<p className='text-gray-400 mt-8 text-md font-light'>You Have Not Liked A Song.</p>}
    </LoggedInContainer>
  )
}

export default LikedSongs;