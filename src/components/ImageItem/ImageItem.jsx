import {useState,React} from 'react'
import './ImageItem.css'
import logo from '../../assets/logo.png'
import dowload from '../../assets/download.svg'
import { IoIosShareAlt } from "react-icons/io";
import { FaDownload } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { useContext } from 'react';
import { storeContext } from '../../StoreContext/StoreContext';

const ImageItem = ({ id, image,likes }) => {
  
 const {url}= useContext(storeContext);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };
  
  return (
    <div className='image-item'>
      <div className="image-item-container">
        <img src={url+"/images/"+image} alt="" />
        {/* <div className='like'>
          <p>likes:<span>{likes}</span></p>
          <div className='sdl'>
          <FaDownload />
          <IoIosShareAlt />
          <FcLike />
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default ImageItem