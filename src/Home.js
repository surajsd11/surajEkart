import React from 'react'
import Services from './components/Services'
import HeroSection from "./components/HeroSection"
import Trusted from './components/Trusted'
import FeatureProduct from './components/FeatureProduct'

function Home() {

 const data ={
  name:"Suraj store"
 }

  return (
    <>
    <HeroSection myData={data}/>
    <FeatureProduct/>
    <Services/>
    <Trusted/>
    
    </>
  )
}



export default Home
