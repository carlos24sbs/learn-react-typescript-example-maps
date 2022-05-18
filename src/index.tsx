/* eslint import/no-webpack-loader-syntax: off */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';
//@ts-ignore
import mapboxgl from '!mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoiY2xvdWRzcGFiYSIsImEiOiJjbDM3empxZmkzb3pmM2RvNTU3cHJmZG8xIn0.QXEUH0HeyVGQMRvgHkzegw';

if ( !navigator.geolocation){
  alert('Your broser do not have geolocation');
  throw new Error('Your broser do not have geolocation');
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
