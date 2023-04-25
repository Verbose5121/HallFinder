import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import Geolocation from "@mapbox/mapbox-gl-geocoder/lib/geolocation";
import { dataGeo } from "./data.js";
//import MapboxDirections from "@mapbox/mapbox-gl-directions"
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import * as turf from "@turf/turf";
import { fontSize } from "@mui/system";
mapboxgl.accessToken = import.meta.env.VITE_PUBLIC_KEY;
let data1 = dataGeo.features;

const Map = () => {
  const mapContainer = useRef(null);
  let map = useRef(null);
  let loc = useRef(null);
  const [userLng, setUserLng] = useState("");
  const [userLat, setUserLat] = useState("");
  const [lng, setLng] = useState(-114.0571411);
  const [lat, setLat] = useState(51.0453809);
  const [zoom, setZoom] = useState(10);
  const [title, setTitle] = useState("Hello");
  const [data, setData] = useState(dataGeo.features);
  const [fly, setFly] = useState([]);
  const [route, setRoute] = useState("Please select your location");
  const geoCoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
    marker: {
      color: "orange",
    },
    placeholder: " Search Halls",
    bbox: [-140.99778, 41.6751050889, -52.6480987209, 83.23324],
  });
  const MapBoxDirections = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    unit: "metric",
    profile: "mapbox/driving",
    bbox: [(-140.99778, 41.6751050889), (-52.6480987209, 83.23324)],
  });

  useEffect(() => {
    geoCoder.on("result", function (results) {
      console.log(results.result.place_name);
      setTitle(results.result.place_name);
      setLng(results.result.center[0]);
      setLat(results.result.center[1]);
      //   setZoom(13);
    });

    // MapBoxDirections.on("route", function (routes) {
    //     setRoute((routes.route[0].distance/1000).toFixed(2));
    // });

    // if (map.current) return; // initialize map only once
    map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      //style: "https://studio.mapbox.com/tilesets/prabhsagoo.clgda45tl00mo2io1woyd8q34-9m1pw",
      center: [lng, lat],
      zoom: zoom,
    });
    //Geocoder
    // map
    //   .addControl(geoCoder, "top-right")
    loc = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      // When active the map will receive updates to the device's location as it changes.
      trackUserLocation: true,
      // Draw an arrow next to the location dot to indicate which direction the device is heading.
      showUserHeading: true,
      showUserLocation: true,
    });

    loc.on("geolocate", function (a) {
      setUserLat(a.coords.latitude);
      setUserLng(a.coords.longitude);
    });
    map.addControl(loc, "top-left");
    map
      .addControl(new mapboxgl.NavigationControl())
      .addControl(MapBoxDirections, "top-left");

    //Array data.map
    data.map((a) => {
      const el = document.createElement("div");
      el.className = "marker";
      new mapboxgl.Marker(el)
        .setLngLat([a.geometry.coordinates[0], a.geometry.coordinates[1]])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(`<H3>${a.properties.name}</h3>`)
        )
        .addTo(map);
      // console.log(dataGeo.features[i].geometry.coordinates);
    });

    console.log("useEffect");
  }, [data]);

  function flyToStore(currentFeature) {
    console.log("Second Hook");
    // map.flyTo({
    //   center: currentFeature.geometry.coordinates,
    //   zoom: 15,
    // });

    // let popup = new mapboxgl.Popup({ closeOnClick: false, closeButton: false }) // add popups
    //       .setHTML(
    //         `<h3>Address:</h3><h4>Name: ${currentFeature.properties.name}</h4>`
    //       )
    // let marker1 = new mapboxgl.Marker({
    //   color: "brown",
    //   scale: 2,
    // })
    //   .setLngLat(currentFeature.geometry.coordinates)

    //   .setPopup(popup);
    //   if (popup.isOpen()) {

    //     popup.remove();

    // } else {

    //     marker1.addTo(map).togglePopup();

    // }

    console.log(currentFeature.geometry.coordinates);
    console.log(userLng);
    MapBoxDirections.setOrigin([userLng, userLat]);
    MapBoxDirections.setDestination(currentFeature.geometry.coordinates);

    var distance = turf.distance(
      [userLng, userLat],
      currentFeature.geometry.coordinates,
      { units: "kilometers" }
    );
    console.log("Distance is " + Math.round(distance) + " KM");
  }

  return (
    <div className="data" id="data">
      <div className="list">
        <ul id="listData">
          {data1.map((b, index) => {
            return (
              <Card
                sx={{ Width: 345 }}
                className="card"
                onClick={() => {
                  flyToStore(b);
                }}
              >
                <CardActionArea className="card1">
                  <CardMedia />
                  <img src={b.properties.img} height="200px" width="100%" />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {b.properties.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {b.properties.address}
                      <br />
                      <Typography component={"span"}>
                        {" "}
                        {userLng
                          ? Math.round(
                              turf.distance(
                                [userLng, userLat],
                                b.geometry.coordinates,
                                { units: "kilometers" }
                              )
                            ) + " KM"
                          : ""}
                      </Typography>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              //   <li
              //     value={index}
              //     id="data1"
              //     onClick={() => {
              //       console.log(
              //         //   b.geometry.coordinates[0] + ", " + b.geometry.coordinates[1]
              //         MapBoxDirections
              //       );
              //     }}
              //   >
              //     {b.geometry.coordinates[0]}, {b.geometry.coordinates[1]}
              //     <button
              //       id="btn"
              //       onClick={() => {
              //         flyToStore(b);
              //       }}
              //     >
              //       Select
              //     </button>
              //   </li>
            );
          })}
        </ul>
      </div>
      {/* {" "}
      <h4>
        {title} <br></br>(Lng: {lng}, Lat:{lat})
      </h4> */}
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};

export default Map;

function dataSelected(a) {
  setData(a);
}
