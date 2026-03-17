"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression, LatLngTuple } from "leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

interface MapProps {
  posix?: LatLngExpression | LatLngTuple,
  zoom?: number,
  name?: string,
  locations?: {id: number, name: string, lat: number, lng: number}[]
}

const defaults = {
  zoom: 30,
};

const Map = ({ zoom = defaults.zoom, posix , name, locations }: MapProps) => {
    const center = posix || (locations && locations.length > 0
    ? [locations[0].lat, locations[0].lng]
    : [23.5880, 58.3829] // fallback (مسقط)
  );
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {posix && (
        <Marker position={posix}>
          <Popup>{name}</Popup>
        </Marker>
      )}

      {locations && locations.map((loc) => (
        <Marker key={loc.id} position={[loc.lat, loc.lng]}>
          <Popup>{loc.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;