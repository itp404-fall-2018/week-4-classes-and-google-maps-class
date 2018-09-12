let usc = new google.maps.LatLng(34.043514, -118.266210);

let map = new google.maps.Map(document.getElementById('map'), {
  center: usc,
  zoom: 13
});

let uscMarker = new google.maps.Marker({
  map: map,
  position: usc,
  animation: google.maps.Animation.BOUNCE
});

let infoWindow = new google.maps.InfoWindow({
  position: usc,
  content: '<strong>USC</strong>'
});

google.maps.event.addListener(uscMarker, 'click', function() {
  infoWindow.open(map);
});

$('form').on('submit', function(event) {
  event.preventDefault();

  let searchTerm = document.getElementById('search-term').value;

  let geocoder = new google.maps.Geocoder();

  geocoder.geocode({
    address: searchTerm
  }, function(geocoderResults) {
    let position = geocoderResults[0].geometry.location;

    map.setCenter(position);

    new google.maps.Marker({
      map: map,
      position: position,
      animation: google.maps.Animation.DROP
    });
  });
});
