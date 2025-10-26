
maptilersdk.config.apiKey = mapToken;
const map = new maptilersdk.Map({
    container: 'map',
    style: "https://api.maptiler.com/maps/streets-v2/style.json?key=YTPTbtXxEffhDcreOTSg",
    center: [78.9629, 20.5937],
    // center: cordinates, // India center
    zoom: 9,
    // apiKey: "<%= process.env.MAP_TOKEN %>"
});

// if(coordinates[0] !== 0 && coordinates[1] !== 0){
// const marker = new maptilersdk.Marker()
//   .setLnglat(cordinates)
//   .setPopup(new maptilersdk.Popup().setText("<%= listing.address %>"))
//   .addTo(map);
// }