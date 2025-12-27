import React from 'react';
import Card from '../sharedComponents/Card';

const PlaylistView = ({playlistTitle,cardsData}) => {
  return (
    <>
      <h2 className="font-bold text-white text-2xl">{playlistTitle}</h2>
      <div className="mt-4 grid grid-cols-4 gap-2">
          {cardsData.map((item,index)=>{
              return(
                  <Card key={index} imgSource={item.imageSource} cardTitle={item.cardTitle} cardDescription={item.cardDescription} />
              )
          })}
      </div>
    </>
  )
};

export default PlaylistView;