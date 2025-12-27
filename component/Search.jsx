import { React, useState } from "react";
import LoggedInContainer from "./container/LoggedInContainer";
import SearchInput from "./sharedComponents/SearchInput";
import {makeAuthorizedGetRequest} from '../utils/helper';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyMusicCard from "./sharedComponents/MyMusicCard";

const NoSongsFound = () =>
    toast.error("No Songs Found.");

const SearchComponent = () => {
  const [searchValue, setSearchValue] = useState("");
  const [fetchedData, setFetchedData] = useState([]);

  const searchSong = async() =>{ 
    const response = await makeAuthorizedGetRequest(`/song/get/song/${searchValue}`);
    if(response && !response.error){
       setFetchedData(response.song);
       return;
    }
    NoSongsFound();
    return;
}

  return (
    <LoggedInContainer currentScreen="Search">
      <SearchInput
        placeholder={"What Do You Want To Listen To?"}
        id={"songName"}
        value={searchValue}
        setValue={setSearchValue}
        onKeyDown={searchSong}
      />
      {fetchedData.map((item)=>{
        return(
            <div key={item._id} className="mt-4">
            <MyMusicCard item={item}/>
            </div>
        )
      })}
      <ToastContainer position="bottom-right"/>
    </LoggedInContainer>
  );
};

export default SearchComponent;
