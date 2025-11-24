
(function () {
  // Crea contenedores de estado/coords si no existen
  function ensure(id, text) {
    let el = document.getElementById(id);
    if (!el) { el = document.createElement('div'); el.id = id; el.textContent = text || ''; document.body.prepend(el); }
    return el;
  }
  const statusEl = ensure('status', 'Esperando permisos…');
  const coordsEl = ensure('coords', 'Lat: —, Lng: — (±— m)');

  let map, marker, circle;

  function onSuccess(pos) {
    const { latitude: lat, longitude: lng, accuracy } = pos.coords;

    // Muestra coords y precisión
    coordsEl.textContent = 'Lat: ' + lat + ', Lng: ' + lng + ' (±' + Math.round(accuracy) + ' m)';
    statusEl.textContent = 'OK';

    if (!map) {
      map = L.map('map').setView([lat, lng], 16);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
      }).addTo(map);
      marker = L.marker([lat, lng]).addTo(map);
      circle = L.circle([lat, lng], { radius: accuracy }).addTo(map);
    } else {
      marker.setLatLng([lat, lng]);
      circle.setLatLng([lat, lng]).setRadius(accuracy);
      map.panTo([lat, lng]);
    }
  }

  function onError(err) {
    const msg = {1:'Permiso denegado',2:'Posición no disponible',3:'Tiempo excedido'}[err.code] || 'Error';
    statusEl.textContent = '⚠ ' + msg + ': ' + err.message;
    console.error('Geolocalización:', err.code, err.message);
  }

  function init() {
    if (!('geolocation' in navigator)) {
      statusEl.textContent = 'Tu navegador no soporta geolocalización';
      return;
    }
    statusEl.textContent = 'Solicitando permisos…';
    navigator.geolocation.watchPosition(onSuccess, onError, {
      enableHighAccuracy: true, maximumAge: 0, timeout: 20000
    });
  }

  window.addEventListener('load', init);
})();

/*var marker = L.marker([51.5, -0.09]).addTo(map);

var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);*/