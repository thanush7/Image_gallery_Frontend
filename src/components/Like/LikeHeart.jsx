// src/LikeHeart.jsx
import React, { useState } from 'react';
import {AiFillLike, AiFillDislike} from 'react-icons/ai'
import './LikeHeart.css'; 

const LikeHeart = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="like-heart">
    {!liked?
      <AiFillLike
      color="white" 
      size="50" 
      background-color="transparent"
      onClick={toggleLike}/>:<AiFillLike
      color="blue" 
      size="50" 
      onClick={toggleLike}/>}
    </div>
  );
};

export default LikeHeart;
