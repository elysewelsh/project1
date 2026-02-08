// const ipInputElement: HTMLInputElement = document.getElementById("ipInput");

import { handleError } from "./utils/errorHandler.js"
import { buttonAction } from "./utils/button.js"

export const ipInputElement = document.getElementById("ipInput") as HTMLInputElement;
// export const ipInput: string = ipInputElement.value;
// console.log(ipInput);

// export const ipInput: string = "138.128.140.72";


const startBtn = document.getElementById("searchButton") as HTMLElement;


startBtn?.addEventListener('click',()=> {
try {
    const typedIp = ipInputElement.value;
        buttonAction(typedIp);
}
catch(e) {
    handleError("index", e as Error);
};
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