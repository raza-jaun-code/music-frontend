import {React, useEffect , useState} from "react";
import {makeAuthorizedGetRequest} from "../utils/helper";
import MyMusicCard from "./sharedComponents/MyMusicCard";
import LoggedInContainer from "./container/LoggedInContainer";

const MyMusicComponent = () => {

  const [data,setData] = useState([]);
  
  useEffect(() => {
    const getData = async () => {
      const path = "/song/get/mysongs";
      const response = await makeAuthorizedGetRequest(path);
      setData(response.songs);
    };
    getData();
  }, []);

  return (
    <LoggedInContainer currentScreen="My Music">
      {data.map((item)=>{ 
            return(
            <MyMusicCard key={item._id} item={item}/>
        )})}
    </LoggedInContainer>
  );
};

export default MyMusicComponent;
