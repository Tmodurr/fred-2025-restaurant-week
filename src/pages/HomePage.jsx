import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import MapComponent from '@/components/MapComponent';
import './HomePage.css'

function HomePage() {

  const navigate = useNavigate()

  return (
    <div className='app__container'>
      <MapComponent />  
    </div>
  )
}

export default HomePage
