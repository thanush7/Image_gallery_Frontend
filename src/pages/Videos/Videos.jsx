import React from 'react'
import axios from 'axios'
import { useState,useEffect} from 'react'
import { assets } from '../../../../admin/src/assets/assets';
import './Videos.css'

const Videos = () => {
  const [list,setList]=useState([]);
  
  const url=assets.url;
  const fetchList=async()=>{
    const response=await axios.get(`${url}/api/gallery/listTemp`);
    if(response.data.success){
      setList(response.data.data);
    }
    else{
      toast.error('error')
    }
  }
  
  useEffect(()=>{
    fetchList();
  },[])
  
  return (
    <div className='video-container'>
        {list.map((item,index)=>{
          return (
           <div className='template'>
              <a href={item.url}><img src={`${url}/timages/`+item.image}  alt="" /></a>
           </div>
          )
        })}
    </div>
  )
}

export default Videos