import {React,useState} from 'react'
import './Home.css'
import { Top } from '../../components/Top/Top'
import ImageDisplay from '../../components/ImageDisplay/ImageDisplay';
import ExploreImage from '../../components/ExploreImage/ExploreImage';
import Footer from '../../components/Footer/Footer'
const Home = () => {
  const[category,setCategory]=useState("All");
  return (
    <div className='home-container'>
        <Top/>
        <ExploreImage category={category} setCategory={setCategory}/>
        <ImageDisplay category={category} setCategory={setCategory}/>
        <Footer/>
    </div>
  
    
  )
}

export default Home