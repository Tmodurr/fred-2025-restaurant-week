import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import './MapComponent.css';

mapboxgl.accessToken = 'pk.eyJ1IjoidG1vc2VzIiwiYSI6ImNtNjQ0OG94ODFpejcybG91c2xqZTB2enEifQ.29QY4oOqTu81-ML9NAZVbg';

const MapComponent = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current, 
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-77.4605, 38.3032], 
      zoom: 12,
    });

    map.addControl(new mapboxgl.NavigationControl());

    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
          enableHighAccuracy: true
      },
      trackUserLocation: true,
      showUserHeading: true
  }));

    return () => map.remove(); // Tear down
  }, []);

  return <div className="map__container" ref={mapContainerRef} />;
};

export default MapComponent;
