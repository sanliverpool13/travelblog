import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
  Line,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const markers = [
  {
    markerOffset: -7,
    name: "Toronto",
    coordinates: [-79.3832, 43.6532],
  },
  {
    markerOffset: -7,
    name: "Calgary",
    coordinates: [-114.070847, 51.048615],
  },
  {
    markerOffset: -7,
    name: "Cancun",
    coordinates: [-86.851524, 21.161907],
  },
];

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
];

interface Props {
  setMarkerTitle: (title: string) => void;
}

const Map: React.FC<Props> = ({ setMarkerTitle }) => {
  const [markersState, setMarkersState] = useState(markers);

  const toggleCircleName = (name: string) => {
    let oldMarkersState = markersState;
    setMarkersState(oldMarkersState);
  };

  return (
    <ComposableMap>
      <ZoomableGroup>
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
                  hover: { fill: "#04D" },
                  pressed: { fill: "#02A" },
                }}
              />
            ))
          }
        </Geographies>
        {tripDestinations.map((route, index) => (
          <g key={route.name}>
            <Line
              key={index}
              from={route.from.coord}
              to={route.to.coord}
              stroke="#9ED8DB"
              strokeWidth={1.5}
              strokeLinecap="round"
            />

            <Marker key={route.name} coordinates={route.to.coord}>
              <circle
                r="2"
                fill="#9ED8DB"
                onMouseEnter={() => setMarkerTitle(route.to.name)}
              />
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
          <circle
            r={2}
            fill="#9ED8DB"
            onMouseEnter={() => setMarkerTitle("Toronto")}
          />
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
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default Map;
