function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 3,
      center: {lat: 45.184758, lng: -3.549559}
    });

  
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';


    var markers = locations.map(function(location, i) {
      return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length]
      });
    });


    var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
  }
  var locations = [
    {lat: 51.527556, lng: -0.197480},
    {lat: 40.757841, lng: -73.979462},
    {lat: 53.369132, lng: -6.269468},
    {lat: 47.990406, lng: 0.213298},
  ]