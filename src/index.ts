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
        removeMapContainer();
    let typedIp = ipInputElement.value;
    
        buttonAction(typedIp);
}
catch(e) {
    handleError("Index", e as Error);
};
});


function removeMapContainer(){
    var container = document.getElementById('map') as HTMLElement;
    if (container) {
        container.outerHTML = '<div id="map"></div';
    }
};