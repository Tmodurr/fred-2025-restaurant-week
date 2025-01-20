import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import MapComponent from '@/components/MapComponent';
import SiteList from '@/components/SiteList';
import './HomePage.css'

function HomePage() {

  const navigate = useNavigate()

  return (
    <div className='app__container'>
      <SiteList /> 
      <MapComponent />  
    </div>
  )
}

export default HomePage
