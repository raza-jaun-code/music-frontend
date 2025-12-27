import {React, useContext} from "react";
import { songContext } from "../../context/songContext";

const Card = ({imgSource,cardTitle,cardDescription, className, playlist, addSongToPlaylist,playlistId,songs}) => {

  const {setClickedPlaylistSongData} = useContext(songContext);

  return (
    <div className={`flex p-4 shadow-lg bg-black justify-center gap-3 rounded-lg flex-col ${className} ${playlist?"items-center":"items-start"}`} onClick={()=>{
      if(addSongToPlaylist) return addSongToPlaylist(playlistId);
      if(songs) return setClickedPlaylistSongData(songs);
    }}>
      <img
        src={imgSource}
        alt="Books Image"
        width={playlist?180:250}
        className="rounded-md"
      />
      <h2 className="text-white text-xs font-bold">{cardTitle}</h2>
      <p className="text-gray-400 text-xs">
        {cardDescription}
      </p>
    </div>
  );
};

export default Card;
