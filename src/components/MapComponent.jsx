import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import resturantData from '../seed/restaurants.json'
import './MapComponent.css';

mapboxgl.accessToken = 'pk.eyJ1IjoidG1vc2VzIiwiYSI6ImNtNjQ0OG94ODFpejcybG91c2xqZTB2enEifQ.29QY4oOqTu81-ML9NAZVbg';

const addRestaurantLayer = (map, geojsonData, layerId, sourceId, paintOptions = {}) => {
  if (map.getSource(sourceId)) {
    console.warn(`Source with ID '${sourceId}' already exists.`);
    return;
  }

  map.addSource(sourceId, { //restaurant-source
    type: 'geojson',
    data: geojsonData,
  });

  // const marker1 = new mapboxgl.Marker()
  // .setLngLat([-77.46267151, 38.301834])
  // .addTo(map);
   // Add markers for each feature in GeoJSON
   resturantData.features.forEach((feature) => {
    const coordinates = feature.geometry.coordinates;
    const title = feature.properties.name;

    new mapboxgl.Marker({ color: '#DC5352' })  // Default marker with orange color
        .setLngLat(coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 }).setText(title)) // Add popup with title
        .addTo(map);
});

  console.log(`Layer '${layerId}' added successfully.`);
};

const MapComponent = () => {
  const mapContainerRef = useRef();
  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,

      center: [-77.4605, 38.3032],
      zoom: 12,
      pitch: 30,
      bearing: 12.8,
      hash: true,
      style: 'mapbox://styles/tmoses/cm6465rez006m01s64rly0kly',
      projection: 'globe'
    });

    mapRef.current.addControl(new mapboxgl.NavigationControl());

    mapRef.current.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true,
      showUserHeading: true
    }));

    mapRef.current.on('load', () => {
      addRestaurantLayer(mapRef.current, resturantData, 'restaurant-layer', 'restaurant-source', {
        radius: 10,
        color: '#ff6600',
        strokeWidth: 2,
        strokeColor: '#000000'
      });
    });


    mapRef.current.on('style.load', () => {
      mapRef.current.setConfigProperty('basemap', 'lightPreset', 'dusk');

      // use an expression to transition some properties between zoom levels 11 and 13, preventing visibility when zoomed out
      const zoomBasedReveal = (value) => {
        return [
          'interpolate',
          ['linear'],
          ['zoom'],
          11,
          0.0,
          13,
          value
        ];
      };

      mapRef.current.setSnow({
        density: zoomBasedReveal(0.85),
        intensity: 1.0,
        'center-thinning': 0.1,
        direction: [0, 50],
        opacity: 1.0,
        color: `#ffffff`,
        'flake-size': 0.3,
        vignette: zoomBasedReveal(0.3),
        'vignette-color': `#ffffff`
      });
    });

    return () => mapRef.current.remove(); // Tear down
  }, []);

  return <div className="map__container" ref={mapContainerRef} />;
};

export default MapComponent;
