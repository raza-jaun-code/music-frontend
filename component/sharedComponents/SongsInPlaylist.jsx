import React, { useContext } from 'react';
import LoggedInContainer from '../container/LoggedInContainer';
import MyMusicCard from './MyMusicCard';
import { songContext } from '../../context/songContext';

const SongsInPlaylist = () => {

  const {clickedPlaylistSongData} = useContext(songContext);
 
  return (
    <LoggedInContainer currentScreen={"Library"}>
        <h2 className='text-white text-2xl font-bold'>Songs In The Playlist</h2>
        {clickedPlaylistSongData.length>0?clickedPlaylistSongData.map((item)=>{
            return(
                <MyMusicCard item={item} key={item._id}/>
            )
        }):<p className='text-gray-400 mt-8 font-light text-md'>No Songs Were Found.</p>}
    </LoggedInContainer>
  )
}

export default SongsInPlaylist;