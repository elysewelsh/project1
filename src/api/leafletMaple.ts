import { LatLngLiteral, MapOptions, tileLayer, map, icon, IconOptions, marker, MarkerOptions, Map, DomUtil } from "leaflet";
import { handleError } from "../utils/errorHandler";


export function redrawMap (coordinates: LatLngLiteral) {
try {
// passes designated map div from HTML and options variable from above into pre-made map function from Leaflet
                let ipMap = map('map', {zoomControl: false}).setView(coordinates, 17);
// adds a tile layer to map in the style and options chosen          
                tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 25,
                attribution: '© OpenStreetMap'
                }).addTo(ipMap);
                let blackIcon: IconOptions = {
                    iconUrl: '/icon-location.svg',
                    iconSize:     [38, 50], // size of the icon
                    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
                };
                let blackMarker: MarkerOptions = {
                    icon: icon(blackIcon)
                };
                marker(coordinates, blackMarker).addTo(ipMap); 
            }
            catch (e) {
                handleError("Map", e as Error);
            }
        }