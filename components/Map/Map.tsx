import React, { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { MapContainer } from "./style";
import L, { LatLngExpression } from "leaflet";
import "./leafletConfig";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const tripDestinations = [
  {
    from: { coord: [-79.3832, 43.6532], name: "Toronto", markerOffset: 5 },
    to: { coord: [-114.070847, 51.048615], name: "Calgary", markerOffset: -5 },
    name: "Toronto-Calgary",
  },
  {
    from: { coord: [-79.3832, 43.6532], name: "Toronto", markerOffset: 5 },
    to: { coord: [-86.851524, 21.161907], name: "Cancun", markerOffset: -5 },
    name: "Toronto-Cancun",
  },
  {
    from: { coord: [-79.3832, 43.6532], name: "Toronto", markerOffset: 5 },
    to: { coord: [-80.8431, 35.2271], name: "Charlotte", markerOffset: -5 },
    name: "Toronto-Charlotte",
  },
  {
    from: { coord: [-79.3832, 43.6532], name: "Toronto", markerOffset: 5 },
    to: { coord: [-81.0912, 32.0809], name: "Savannah", markerOffset: -5 },
    name: "Toronto-Savannah",
  },
  {
    from: { coord: [-79.3832, 43.6532], name: "Toronto", markerOffset: 5 },
    to: {
      coord: [-81.4678, 28.4743],
      name: "Universal Orlando",
      markerOffset: -5,
    },
    name: "Toronto-Universal Orlando",
  },
  {
    from: { coord: [-79.3832, 43.6532], name: "Toronto", markerOffset: 5 },
    to: {
      coord: [-80.13, 25.7907],
      name: "Miami Beach",
      markerOffset: -5,
    },
    name: "Toronto-Miami Beach",
  },
];

interface MarkerType {
  location: string;
  coordinates: [number, number];
}

const markers: MarkerType[] = [
  { location: "Calgary", coordinates: [51.048615, -114.070847] },
  { location: "Tiny Township", coordinates: [44.695, -79.9953] },
  { location: "Banff", coordinates: [51.1784, -115.5708] },
  { location: "Riviera Maya", coordinates: [20.5536, -87.167] },
  { location: "New York", coordinates: [40.7128, -74.006] },
  { location: "Philadelphia", coordinates: [39.9526, -75.1652] },
  { location: "Charlotte", coordinates: [35.227085, -80.843124] },
  { location: "Savannah", coordinates: [32.076176, -81.088371] },
  { location: "Universal Studios, Orlando", coordinates: [28.5384, -81.3789] },
  { location: "Miami Beach", coordinates: [25.7907, -80.13] },
  { location: "Amsterdam", coordinates: [52.3676, 4.9041] },
  { location: "Utrecht", coordinates: [52.0907, 5.1214] },
  { location: "Alkmaar", coordinates: [52.6324, 4.7534] },
  { location: "Den Bosch", coordinates: [51.6978, 5.3037] },
  { location: "Berlin", coordinates: [52.52, 13.405] },
];

// const Map: React.FC = () => {
//   return (
//     <MapContainer>
//       <ComposableMap>
//         <Geographies geography={geoUrl}>
//           {({ geographies }) =>
//             geographies.map((geo) => (
//               <Geography
//                 key={geo.rsmKey}
//                 geography={geo}
//                 fill="#1D3354"
//                 strokeWidth={0.5}
//                 stroke="black"
//                 style={{
//                   default: { fill: "#1D3354" },
//                 }}
//               />
//             ))
//           }
//         </Geographies>
//         {tripDestinations.map((route, index) => (
//           <g key={route.name}>
//             <Marker key={route.name} coordinates={route.to.coord}>
//               <circle r="1" fill="#9ED8DB" />
//               <text
//                 textAnchor="middle"
//                 y={route.to.markerOffset}
//                 style={{
//                   fontFamily: "system-ui",
//                   fill: "#9ED8DB",
//                   fontSize: "0.5rem",
//                 }}
//               >
//                 {route.to.name}
//               </text>
//             </Marker>
//           </g>
//         ))}
//         <Marker coordinates={[-79.3832, 43.6532]}>
//           <circle r={1} fill="#9ED8DB" />
//           <text
//             textAnchor="middle"
//             y={-5}
//             style={{
//               fontFamily: "system-ui",
//               fill: "#9ED8DB",
//               fontSize: "0.5rem",
//             }}
//           >
//             Toronto
//           </text>
//         </Marker>
//       </ComposableMap>
//     </MapContainer>
//   );
// };
const Map: React.FC = () => {
  useEffect(() => {
    if (document.getElementById("map") !== null) {
      const map = L.map("map").setView([43.6532, -79.3832], 10);

      const openStreetMap = L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }
      ).addTo(map);

      markers.forEach((marker) => {
        L.marker(marker.coordinates).addTo(map);
      });

      console.log("icon default", L.Icon.Default);

      // Cleanup function to remove the map
      return () => {
        map.remove();
      };
    }
  }, []);

  return (
    <div
      id="map"
      style={{ height: "600px", width: "100%", marginTop: "10rem" }}
    ></div>
  );
};

export default Map;
