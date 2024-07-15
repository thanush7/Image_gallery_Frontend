import { createContext } from "react";
import {  menu_list } from "../assets/assests.js";
import { useState } from "react";
import axios from 'axios'
import { useEffect } from "react";

export const storeContext=createContext(null);

const StoreContextProvider = (props) => {
   
    
    const url="http://localhost:4000";
    
    const[image_list,setImageList]=useState([]);
    
    const fetchImageList=async()=>{
      const response=await axios.get(`${url}/api/gallery/list`);
      setImageList(response.data.data);    
    }
    useEffect(()=>{
      fetchImageList();
    },[]);
    const contextValue={
      image_list,
      menu_list,
      url
  }
  return (
   <storeContext.Provider value={contextValue}>
    {props.children}
   </storeContext.Provider>
  )
}

export default StoreContextProvider;