import { createContext } from "react";

export const profileContext = createContext({
    firstName:null,
    lastName:null,
    setFirstName:()=>{},
    setLastName:()=>{},
})