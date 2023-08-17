function initMap() {
    const mapDiv = document.getElementById('map');
    const centerLocation = { lat: -32.866028, lng: -68.841379 };
  
    const map = new google.maps.Map(mapDiv, {
      center: centerLocation,
      zoom: 15
    });
  
    const marker = new google.maps.Marker({
      position: centerLocation,
      map: map,
      title: 'Ubicación exacta'
    });
  }