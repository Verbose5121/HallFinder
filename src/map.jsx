import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import Geolocation from "@mapbox/mapbox-gl-geocoder/lib/geolocation";
import { dataGeo } from "./data.js";
//import MapboxDirections from "@mapbox/mapbox-gl-directions"
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions"
mapboxgl.accessToken = import.meta.env.VITE_PUBLIC_KEY;
let data1 = dataGeo.features;

const Map = () => {
    const mapContainer = useRef(null);
    let map = useRef(null);
    const [lng, setLng] = useState(-114.0571411);
    const [lat, setLat] = useState(51.0453809);
    const [zoom, setZoom] = useState(10);
    const [title, setTitle] = useState("Hello");
    const [data, setData] = useState(dataGeo.features);
    const [fly, setFly] = useState([]);
    const geoCoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: {
            color: "orange",
        },
    });
    const MapBoxDirections = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'metric',
        profile: 'mapbox/driving'
    })

    useEffect(() => {
        geoCoder.on("result", function (results) {

            console.log(results.result.place_name);
            setTitle(results.result.place_name);
            setLng(results.result.center[0]);
            setLat(results.result.center[1]);
            //   setZoom(13);
        });

        MapBoxDirections.on("route", function (route) {
            console.log(route);
        });


        // if (map.current) return; // initialize map only once
        map = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v12",
            //style: "https://studio.mapbox.com/tilesets/prabhsagoo.clgda45tl00mo2io1woyd8q34-9m1pw",
            center: [lng, lat],
            zoom: zoom,
        });
        map
            .addControl(geoCoder, "top-right")
            .addControl(
                new mapboxgl.GeolocateControl({
                    positionOptions: {
                        enableHighAccuracy: true,
                    },
                    // When active the map will receive updates to the device's location as it changes.
                    trackUserLocation: true,
                    // Draw an arrow next to the location dot to indicate which direction the device is heading.
                    showUserHeading: true,
                    showUserLocation: true,
                })
            )
            .addControl(new mapboxgl.NavigationControl())
            .addControl(MapBoxDirections, "top-left");

        //Array data.map
        data.map((a) => {
            const el = document.createElement('div');
            el.className = 'marker';
            new mapboxgl.Marker(el)
                .setLngLat([a.geometry.coordinates[0], a.geometry.coordinates[1]])
                .setPopup(
                    new mapboxgl.Popup({ offset: 25 }) // add popups
                        .setHTML(`<h3>ID: ${a.properties.ID}</h3>`)
                )
                .addTo(map);
            // console.log(dataGeo.features[i].geometry.coordinates);
        });



        console.log("useEffect");
    }, [data]);

    function flyToStore(currentFeature) {
        console.log("Second Hook");
        
        map.flyTo({
            center: currentFeature.geometry.coordinates,
            zoom: 15,
        });

        new mapboxgl.Marker({
            color: "brown",
            scale: 2,
        })
            .setLngLat(currentFeature.geometry.coordinates)

            .setPopup(
                new mapboxgl.Popup({ closeOnClick: false, closeButton: false }) // add popups
                    .setHTML(
                        `<h3>Description:</h3><h4>ID: ${currentFeature.properties.ID}</h4>`
                    )
            )
            .addTo(map)
            .togglePopup();

            MapBoxDirections.setOrigin(45.350765,-75.6599924);
            MapBoxDirections.setDestination(currentFeature.geometry.coordinates);
    }

    return (
        <div className="data">
            {" "}
            <h1>
                {title} <br></br>(Lng: {lng}, Lat:{lat})
            </h1>
            <div ref={mapContainer} className="map-container" />
            <div className="list">
                <ul id="listData">
                    {data1.map((b, index) => {
                        return (
                            <li
                                value={index}
                                id="data1"
                                onClick={() => {
                                    console.log(
                                        //   b.geometry.coordinates[0] + ", " + b.geometry.coordinates[1]
                                        MapBoxDirections
                                    );
                                }}
                            >
                                {b.geometry.coordinates[0]}, {b.geometry.coordinates[1]}
                                <button
                                    id="btn"
                                    onClick={() => {
                                        flyToStore(b);
                                    }}
                                >
                                    Select
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Map;

function dataSelected(a) {
    setData(a);
}
