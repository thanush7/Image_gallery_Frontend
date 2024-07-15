import React, { useContext } from 'react'
import './ImageDisplay.css'
import {storeContext} from '../../StoreContext/StoreContext'
import ImageItem from '../ImageItem/ImageItem';
const ImageDisplay = ({category}) => {
  const {image_list} =useContext(storeContext);
  
  return (
    <div className='image-display'>
      <div className='image-list'>
        {
         image_list.map((item,index)=>{
           if(category==="All"||category===item.category){
            return <ImageItem key={index} id={item._id}  image={item.image} likes={item.likes}/>
           }
         })
        }
      </div>
    </div>
  )
}

export default ImageDisplay