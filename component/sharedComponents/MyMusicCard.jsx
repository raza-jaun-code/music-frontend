import { useContext } from "react";
import { songContext } from "../../context/songContext";

const MyMusicCard = ({ item }) => {

  const {setCurrentSong} = useContext(songContext);

  return (
    <div
      onClick={()=>{
        setCurrentSong((prevSong)=>item._id === prevSong._id? prevSong : item);
      }}
      className="mt-4 flex items-center cursor-pointer px-5 justify-between hover:bg-black hover:opacity-75 py-2 rounded-lg"
    >
      <div className="flex items-center gap-5">
        <img
          src={item.thumbnail}
          alt="Manqabat"
          width={70}
          className="rounded-lg"
        />
        <div className="flex flex-col gap-3 justify-center">
          <h2 className="text-white font-bold text-xl">{item.name}</h2>
          <p className="text-gray-400 font-semibold text-sm">
            {item.artist.firstName + " " + item.artist.lastName}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-white font-semibold text-md">3:00</p>
      </div>
    </div>
  );
};

export default MyMusicCard;
