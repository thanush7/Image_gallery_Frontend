import {React,useState} from 'react'
import './Home.css'
import { Top } from '../../components/Top/Top'
import ImageDisplay from '../../components/ImageDisplay/ImageDisplay';
import ExploreImage from '../../components/ExploreImage/ExploreImage';
const Home = () => {
  const[category,setCategory]=useState("All");
  return (
    <div>
        <Top/>
        <ExploreImage category={category} setCategory={setCategory}/>
        <ImageDisplay category={category} setCategory={setCategory}/>

    </div>
  
    
  )
}

export default Home