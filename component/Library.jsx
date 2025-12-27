import React, { useEffect, useState } from 'react';
import LoggedInContainer from './container/LoggedInContainer';
import { makeAuthorizedGetRequest } from '../utils/helper';
import Card from './sharedComponents/Card';
import { Link } from 'react-router-dom';

const LibraryComponent = () => {

  const [playlistData,setPlaylistData] = useState([]);

  useEffect(()=>{
    const getPlaylistData = async()=>{
      const path = '/playlist/getmyplaylists';
      const response = await makeAuthorizedGetRequest(path);
      setPlaylistData(response.playlists);
    }
    getPlaylistData();
  },[])

  return (
    <LoggedInContainer currentScreen="Library">
        <h2 className='text-white text-2xl font-bold'>My Playlists</h2>
        <div className='grid grid-cols-4 -ml-2 mt-4 gap-5'>
        {playlistData.map((item)=>{
          return(
            <Link to={"/playlist/song"}><Card key={item._id} imgSource={item.thumbnail} cardTitle={item.name} songs={item.songs} className="cursor-pointer"/></Link>
          )
        })}
        </div>
    </LoggedInContainer>
  )
}

export default LibraryComponent;