import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { MapContainer } from "./style";

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

const Map: React.FC = () => {
  return (
    <MapContainer>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#1D3354"
                strokeWidth={0.5}
                stroke="black"
                style={{
                  default: { fill: "#1D3354" },
                }}
              />
            ))
          }
        </Geographies>
        {tripDestinations.map((route, index) => (
          <g key={route.name}>
            <Marker key={route.name} coordinates={route.to.coord}>
              <circle r="1" fill="#9ED8DB" />
              <text
                textAnchor="middle"
                y={route.to.markerOffset}
                style={{
                  fontFamily: "system-ui",
                  fill: "#9ED8DB",
                  fontSize: "0.5rem",
                }}
              >
                {route.to.name}
              </text>
            </Marker>
          </g>
        ))}
        <Marker coordinates={[-79.3832, 43.6532]}>
          <circle r={1} fill="#9ED8DB" />
          <text
            textAnchor="middle"
            y={-5}
            style={{
              fontFamily: "system-ui",
              fill: "#9ED8DB",
              fontSize: "0.5rem",
            }}
          >
            Toronto
          </text>
        </Marker>
      </ComposableMap>
    </MapContainer>
  );
};

export default Map;
