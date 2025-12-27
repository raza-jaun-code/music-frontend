import {createContext} from 'react';

export const songContext= createContext({
    currentSong:null,
    setCurrentSong: ()=>{},
    playSound: ()=>{},
    soundPlayed: null,
    setSoundPlayed: ()=>{},
    togglePlayPause: ()=>{},
    isPaused: true,
    showCreatePlaylist:null,
    setShowCreatePlaylist: ()=>{},
    setShowAddToPlaylist:()=>{},
    showAddToPlaylist:null,
    clickedPlaylistSongData:null,
    setClickedPlaylistSongData: ()=>{},
    isSongLiked:null,
    setIsSongLiked: ()=>{},
})