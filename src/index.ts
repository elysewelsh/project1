// const ipInputElement: HTMLInputElement = document.getElementById("ipInput");

import { map, tileLayer, MapOptions } from "leaflet";
import { LatLngLiteral } from "leaflet"
import { handleRequest } from "./api/api.js"

const ipInputElement = document.getElementById("ipInput") as HTMLInputElement;
// export const ipInput: string = ipInputElement.value;
// console.log(ipInput);

// export const ipInput: string = "138.128.140.72";


// HTML variables
// const mapSpace = document.getElementById("map") as HTMLElement;
const addressSpace = document.getElementById("addressFill") as HTMLElement;
const locationSpace = document.getElementById("locationFill") as HTMLElement;
const timeZoneSpace = document.getElementById("timeZoneFill") as HTMLElement;
const ispSpace = document.getElementById("ispFill") as HTMLElement;
const startBtn = document.getElementById("searchButton") as HTMLElement;

async function run(ipInput: string) {
    const reply = await handleRequest(ipInput);
    if (typeof reply  !== "undefined") {
    const coordinates: LatLngLiteral = {
        lat: reply.location.lat,
        lng: reply.location.lng
        };
    const isp: string = reply.isp;
    const ip: string = reply.ip;
    const city: string = reply.location.city;
    const state: string = reply.location.region;
    const timezone: string = reply.location.timezone;
    const zip: string = reply.location.postalcode;
    const toFill = {
        coordinates,
        isp,
        ip,
        city,
        state,
        zip,
        timezone
    }
    return toFill;
    }
    return undefined;
}

startBtn?.addEventListener('click',()=> {
    const typedIp = ipInputElement.value;
    run(typedIp).then((toFill) => {
        if (typeof toFill !== "undefined") {
            const options: MapOptions = {
            center: toFill.coordinates,
            zoom: 12,
            };
            const ipMap = map('map', options);
            tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
            }).addTo(ipMap);   
            addressSpace.innerText = (`${toFill.ip}`);
            locationSpace.innerText = (`${toFill.city}, ${toFill.state} ${toFill.zip}`);
            timeZoneSpace.innerText = (`UTC ${toFill.timezone}`);
            ispSpace.innerText = (`${toFill.isp}`);
        }
        return undefined;
    })
});


// const typedIp = "138.128.140.72";
//     run(typedIp).then((toFill) => {
//         if (typeof toFill !== "undefined") {
//             const options: MapOptions = {
//             center: toFill.coordinates,
//             zoom: 12,
//             };
//             const ipMap = map('map', options);
//             tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//             maxZoom: 19,
//             attribution: '© OpenStreetMap'
//             }).addTo(ipMap);
//             addressSpace.innerText = (`${toFill.ip}`);
//             locationSpace.innerText = (`${toFill.city}, ${toFill.state} ${toFill.zip}`);
//             timezoneSpace.innerText = (`UTC ${toFill.timezone}`);
//             ispSpace.innerText = (`${toFill.isp}`);
//         }
//         return undefined;
//     })