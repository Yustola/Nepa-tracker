// import Navbar from "@/components/Navbar";
// export default function MapPage() {
//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold">🗺️ Map View</h1>
//       <p className="mt-2 text-gray-600">Map feature coming soon...</p>
//     </div>
//   );
// }

"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function MapPage() {
  const nigeriaPosition = [9.082, 8.6753]; // Center of Nigeria

  return (
    <div className="p-4 h-screen">
      <h1 className="text-xl font-bold mb-4">🗺️ Nigeria Map</h1>

      <MapContainer
        center={nigeriaPosition}
        zoom={6}
        scrollWheelZoom={true}
        className="h-125 w-full rounded-xl"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={nigeriaPosition}>
          <Popup>Nigeria 🇳🇬</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
