function initMap() {
  var place = {lat: 36.640003, lng: 127.512422};
  var map = new google.maps.Map(document.querySelector('.googleMap'), {
    center: place,
    zoom: 15
  });
  var marker = new google.maps.Marker({
    position: place,
    map: map
  });
}
