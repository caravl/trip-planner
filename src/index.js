'use strict'

console.log('Hello from JavaScript!');

const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken = "pk.eyJ1IjoibWltaTE2OTQiLCJhIjoiY2phOXQ2eXlvMGwybjJ3cWl5bGdveGdnNyJ9.aQGOUt7BTYtzFFAZPWo0kg";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/satellite-v9" // mapbox has lots of different map styles available.
});

const marker = document.createElement('div');
marker.style.width = '32px';
marker.style.height = '39px';
marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(marker).setLngLat([-74.009, 40.705]).addTo(map);

const newMarker = buildMarker('activity', [-74.009573,40.706158]);
newMarker.addTo(map);
