import React, { useEffect, useState } from "react";

const MapComponent = ({ setUserDistanceKilo, onUserLocationChange }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [distanceTanta, setdistance] = useState(null);

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      console.log("Loading Google Maps script...");
      const script = document.createElement("script");
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyAAQW_nJ8bYyFs6VvXhD4NnvhRmOeflSCQ&libraries=places,geometry";
      script.async = true;
      script.defer = true;

      script.onload = () => {
        window.initMap = initMap; // Set the callback function globally
        initMap();
      };

      script.onerror = (error) => {
        console.error("Error loading Google Maps API script:", error);
      };

      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    };

    const initMap = () => {
      console.log("Initializing map...");

      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 21.970782, lng: 96.096789 },
        zoom: 12,
      });

      const officeLocation = new window.google.maps.LatLng(
        //this is ygn
        // 16.83162046225846,
        // 96.13742771537034

        21.966567256695363,
        96.05978223029763
      );

      const tantaLocation = new window.google.maps.LatLng(
        21.933103504843164,
        96.08108049307
      );

      const officeMarker = new window.google.maps.Marker({
        position: officeLocation,
        map: map,
        title: "Office",
      });

      const tantaMarker = new window.google.maps.Marker({
        position: tantaLocation,
        map: map,
        title: "Tanta",
      });

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLatlng = new window.google.maps.LatLng(
              position.coords.latitude,
              position.coords.longitude
            );
            setUserLocation(userLatlng);

            const userMarker = new window.google.maps.Marker({
              position: userLatlng,
              map: map,
              title: "Your Location",
            });

            const distanceToOffice =
              window.google.maps.geometry.spherical.computeDistanceBetween(
                officeLocation,
                userLatlng
              );

            const distanceToTanta =
              window.google.maps.geometry.spherical.computeDistanceBetween(
                tantaLocation,
                userLatlng
              );
            onUserLocationChange(userLatlng);
            setUserDistanceKilo(
              (distanceToOffice.toFixed(2) / 1000).toFixed(2)
            );
            // alert(
            //   "Distance from Tanta: " +
            //     distanceToTanta.toFixed(2) +
            //     " meters" +
            //     "Distance from Office: " +
            //     distanceToOffice.toFixed(2) +
            //     " meters"
            // );
          },
          (error) => {
            console.error("Error getting user location:", error);
          }
        );
      }
    };

    loadGoogleMapsScript();
  }, []);

  useEffect(() => {
    // Set up a global error handler
    const errorHandler = (message, source, lineno, colno, error) => {
      console.error("Global error handler:", error);

      // Return true to prevent the default browser error handling
      return true;
    };

    window.onerror = errorHandler;

    // Clean up the error handler when the component unmounts
    return () => {
      window.onerror = null;
    };
  }, []);

  return <div id="map" style={{ height: "0px" }}></div>;
};

export default MapComponent;
