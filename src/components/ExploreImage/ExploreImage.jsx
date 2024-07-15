import React, { useContext } from 'react'
import './ExploreImage.css'
import { storeContext } from '../../StoreContext/StoreContext'

const ExploreImage = ({category,setCategory}) => {
    const {menu_list}=useContext(storeContext);
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Gallery</h1>
        <div className='explore-menu-list'>
           {
            menu_list.map((item,index)=>{
                return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index}className='explore-menu-list-item'>
                    <img className={category===item.menu_name?'active':''} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>)
            })
           }
        </div>
        <hr />
    </div>
  )
}

export default ExploreImage