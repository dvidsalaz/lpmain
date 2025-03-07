"use client"; // Needed for Next.js 13 App Router

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;

const MyMap = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current, // Reference to the div
      style: process.env.NEXT_PUBLIC_MAPBOX_STYLE_URL as string, // Your custom style URL
      center: [-96.89, 32.83], // Set your default center [lng, lat]
      zoom: 10, // Set default zoom level
      scrollZoom: false,
      boxZoom: false,
    });

    map.addControl(new mapboxgl.NavigationControl(), "top-right"); // Zoom & rotation controls

    return () => map.remove(); // Cleanup on unmount
  }, []);

  return <div ref={mapContainerRef} className="w-full h-screen" />;
};

export default MyMap;
