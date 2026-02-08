import { LatLngLiteral, MapOptions, tileLayer, map } from "leaflet";
import { handleError } from "../utils/errorHandler";

export function redrawMap (coordinates: LatLngLiteral) {
try {
// defines map options including centerpoint lat and long and zoom
                const options: MapOptions = {
                center: coordinates,
                zoom: 12,
                };
// passes designated map div from HTML and options variable from above into pre-made map function from Leaflet
                const ipMap = map('map', options);
// adds a tile layer to map in the style and options chosen
                tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '© OpenStreetMap'
                }).addTo(ipMap);
            }
            catch (e) {
                handleError("Map", e as Error);
            }
        }