
console.log(mapToken);

mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: campgroundObj.geometry.coordinates, // starting position [lng, lat]
    zoom: 4 // starting zoom
});

map.addControl((new mapboxgl.NavigationControl()));

new mapboxgl.Marker()
    .setLngLat([-74.5, 40])
    .addTo(map)