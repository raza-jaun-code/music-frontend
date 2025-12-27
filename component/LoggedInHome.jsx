import React from "react";
import LoggedInContainer from "./container/LoggedInContainer";
import PlaylistView from "./ReusableComponents/PlaylistView";

const data = [
  {
    imageSource:
      "https://t3.ftcdn.net/jpg/06/86/28/16/360_F_686281636_u9Xp5MgKIK7ReHMZ1PTMS2q4TTTprwxY.jpg",
    cardTitle: "Peaceful Piano",
    cardDescription: "Relax and indulge with beautiful piano places",
  },
  {
    imageSource:
      "https://t3.ftcdn.net/jpg/06/86/28/16/360_F_686281636_u9Xp5MgKIK7ReHMZ1PTMS2q4TTTprwxY.jpg",
    cardTitle: "Peaceful Piano",
    cardDescription: "Relax and indulge with beautiful piano places",
  },
  {
    imageSource:
      "https://t3.ftcdn.net/jpg/06/86/28/16/360_F_686281636_u9Xp5MgKIK7ReHMZ1PTMS2q4TTTprwxY.jpg",
    cardTitle: "Peaceful Piano",
    cardDescription: "Relax and indulge with beautiful piano places",
  },
  {
    imageSource:
      "https://t3.ftcdn.net/jpg/06/86/28/16/360_F_686281636_u9Xp5MgKIK7ReHMZ1PTMS2q4TTTprwxY.jpg",
    cardTitle: "Peaceful Piano",
    cardDescription: "Relax and indulge with beautiful piano places",
  },
];

const LoggedInHomeComponent = () => {
  return (
    <LoggedInContainer currentScreen="Home">
      <PlaylistView playlistTitle={"Focus"} cardsData={data} />
    </LoggedInContainer>
  );
};

export default LoggedInHomeComponent;
