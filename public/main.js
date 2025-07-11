// Main application logic for Wanderland
import { alwaysTrue } from '../src/filters/sampleFilters.js';

// List of GeoJSON files to load from the data/geojson directory
const geojsonFiles = [
  'example1.geojson',
  'example2.geojson'
];

// Store layers by filename
const layers = {};

// Initialize map centered on Canada
const map = L.map('map').setView([56.1304, -106.3468], 4); // Coordinates roughly center Canada

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Load each GeoJSON file and add to map
geojsonFiles.forEach((file) => {
  fetch(`../data/geojson/${file}`)
    .then((response) => response.json())
    .then((data) => {
      // Apply placeholder filter
      const filtered = {
        type: 'FeatureCollection',
        features: data.features.filter(alwaysTrue)
      };
      const layer = L.geoJSON(filtered).addTo(map);
      layers[file] = layer;
      addLayerControl(file);
    })
    .catch((error) => console.error('Error loading', file, error));
});

// Create checkbox for layer visibility
function addLayerControl(filename) {
  const container = document.getElementById('layer-controls');
  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = true;
  checkbox.onchange = () => {
    if (checkbox.checked) {
      map.addLayer(layers[filename]);
    } else {
      map.removeLayer(layers[filename]);
    }
  };
  label.appendChild(checkbox);
  label.append(` ${filename}`);
  container.appendChild(label);
  container.appendChild(document.createElement('br'));
}

// Placeholder for future filter functions
export function applyFilters() {
  // Implementation will go here
}
