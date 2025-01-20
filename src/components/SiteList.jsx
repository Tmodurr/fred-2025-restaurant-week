import React from 'react';
import RestaurantImage from '@/assets/restaurant-week-full.png'
import './SiteList.css';
import Divider from '@/components/Divider';
import restaurantData from '../seed/restaurants.json'
import SiteListItems from '@components/SiteListItems';

const SiteList = () => {
  return (
    <div className="list__container">
       <div className='image__container'>
         <img className="responsive-image" src={RestaurantImage} alt="restaurant-week-image" />;
         {/* <h2>Explore where to eat!</h2> */}
      </div>
      <Divider />
      <SiteListItems data={restaurantData}/>
    </div>
  );
};

export default SiteList;