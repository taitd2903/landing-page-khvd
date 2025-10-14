//@ts-nocheck
import React, { useState, useEffect, useRef} from "react";
import {Map} from '@openmapvn/openmapvn-gl/dist/maplibre-gl.d';
import maplibregl from '@openmapvn/openmapvn-gl';
import '@openmapvn/openmapvn-gl/dist/maplibre-gl.css';

export default function Maps() {

const mapContainerRef = useRef(null);

useEffect(() => {
const map = new maplibregl.Map({
container: mapContainerRef.current,
style: 'https://tiles.openmap.vn/styles/day-v1/style.json',
center: [105.787560, 21.032781],
zoom: 18.34,
attributionControl: false,
});

const marker = new maplibregl.Marker()
    .setLngLat([105.787912, 21.032766]) 
    .addTo(map);

return () => {
  if (map) {
    map.remove();
  }
};
}, []);

return (
<>
<div style={{ width:"100%",height:"100%"}} ref={mapContainerRef} />
</>
);
}