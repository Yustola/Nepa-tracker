// "use client";

// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import { useEffect } from "react";

// // Fix Leaflet icon issue in Next.js
// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: "/marker-icon-2x.png",
//   iconUrl: "/marker-icon.png",
//   shadowUrl: "/marker-shadow.png",
// });

// export default function MapView() {
//   const position = [7.3775, 3.947]; // Ibadan coordinates

//   return (
//     <div style={{ height: "500px", width: "100%" }}>
//       <MapContainer
//         center={position}
//         zoom={13}
//         scrollWheelZoom={true}
//         style={{ height: "100%", width: "100%" }}
//       >
//         <TileLayer
//           attribution="&copy; OpenStreetMap contributors"
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         <Marker position={position}>
//           <Popup>Ibadan - Your map is working ✅</Popup>
//         </Marker>
//       </MapContainer>
//     </div>
//   );
// }

"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix marker icons in Next.js
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/marker-icon-2x.png",
  iconUrl: "/marker-icon.png",
  shadowUrl: "/marker-shadow.png",
});

export default function MapView() {
  const position = [7.3775, 3.947]; // Ibadan

  return (
    <div className="h-full w-full">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>Ibadan - Your map is working ✅</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
