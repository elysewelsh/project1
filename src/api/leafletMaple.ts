import { LatLngLiteral, MapOptions, tileLayer, map, icon, IconOptions, marker, MarkerOptions, Map, DomUtil } from "leaflet";
import { handleError } from "../utils/errorHandler";

// var ipMap: any;

export function redrawMap (coordinates: LatLngLiteral) {
try {
    // map("map").off();
    // map("map").remove();

    // if (ipMap != "undefined" && ipMap != null) {
    //     ipMap("map").remove();
    // };
// defines map options including centerpoint lat and long and zoom
                let options: MapOptions = {
                center: coordinates,
                zoom: 17,
                };
// passes designated map div from HTML and options variable from above into pre-made map function from Leaflet
                // ipMap =  new Map('map', options);
                let ipMap = map('map').setView(coordinates, 17);
// adds a tile layer to map in the style and options chosen          
                tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 25,
                attribution: '© OpenStreetMap'
                }).addTo(ipMap);
                let blackIcon: IconOptions = {
                    iconUrl: 'icon-location.svg',
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