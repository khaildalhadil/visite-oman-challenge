"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression, LatLngTuple } from "leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

interface MapProps {
  posix: LatLngExpression | LatLngTuple;
  zoom?: number;
  name: string
}

const defaults = {
  zoom: 30,
};

const Map = ({ zoom = defaults.zoom, posix, name }: MapProps) => {
  return (
    <MapContainer
      className="h-96 w-96"
      attributionControl={false}
      center={posix} 
      zoom={zoom}
       scrollWheelZoom={false}
      // zoom={zoom}
      // center={posix}
      // scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
    <Marker position={posix}>
      <Popup>{name}</Popup>
    </Marker>
    </MapContainer>
  );
};

export default Map;