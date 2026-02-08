import { fillElements } from "../models/fillElements";
import { handleError } from "./errorHandler";

const addressSpace = document.getElementById("addressFill") as HTMLElement;
const locationSpace = document.getElementById("locationFill") as HTMLElement;
const timeZoneSpace = document.getElementById("timeZoneFill") as HTMLElement;
const ispSpace = document.getElementById("ispFill") as HTMLElement;



export function assignValues(pageFillInfo: fillElements) {
try {
    if (typeof pageFillInfo.ip !== "undefined") {
        addressSpace.innerText = pageFillInfo.ip;
    } else {
        addressSpace.innerText = "Not Found";
    };
    if (typeof pageFillInfo.state === "undefined" || typeof pageFillInfo.zip === "undefined") {
        locationSpace.innerText = pageFillInfo.city;
    } else if (typeof pageFillInfo.zip === "undefined" && typeof pageFillInfo.state !== "undefined") {
        locationSpace.innerText = `${pageFillInfo.city}, ${pageFillInfo.state}`
    } else if (typeof pageFillInfo.zip !== "undefined" && typeof pageFillInfo.state === "undefined") {
        locationSpace.innerText = `${pageFillInfo.city}, ${pageFillInfo.state}`
    } else {
        locationSpace.innerText = "Not Found"
    };
    if (typeof pageFillInfo.timezone !== "undefined") {
        timeZoneSpace.innerText = `UTC ${pageFillInfo.timezone}`;
    } else {
        timeZoneSpace.innerText = "Not Found";
    };
    if (typeof pageFillInfo.isp !== "undefined") {
        ispSpace.innerText = pageFillInfo.isp;
    } else {
        ispSpace.innerText = "Not Found";
    };
}
catch(e) {
    handleError("Values Assignment", e as Error)
}
};