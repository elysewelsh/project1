// const ipInputElement: HTMLInputElement = document.getElementById("ipInput");

import { map, latLng, tileLayer, MapOptions } from "leaflet";

const ipInputElement = document.getElementById("ipInput") as HTMLInputElement;
export const ipInput: string = ipInputElement.value;
console.log(ipInput);

const options: MapOptions = {
  center: latLng(40.731253, -73.996139),
  zoom: 12,
};

const ipMap = map('map', options);