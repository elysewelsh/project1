

import { handleError } from "./utils/errorHandler.js"
import { buttonAction } from "./utils/button.js"
import { APIError } from "./utils/errorHandler.js";
import 'dotenv/config';

export const ipInputElement = document.getElementById("ipInput") as HTMLInputElement;
const startBtn = document.getElementById("searchButton") as HTMLElement;
let errorSpan: HTMLElement | null = document.getElementById("inputError");
let typedIp: string = "192.222.184.101";

onLoad(typedIp);

function onLoad(typedIp: string) {
try {
        removeMapContainer();
        buttonAction(typedIp);
}
catch(e) {
    handleError("Index", e as Error);
};
};

startBtn?.addEventListener('click',()=> {
    startBtn.style.backgroundColor = '#979797';
    try {
        typedIp = ipInputElement.value;
        if (typedIp === "") {
            errorSpan!.innerText = "Please provide an IP address";
        } else {
        errorSpan!.innerText = "";
        removeMapContainer();
        buttonAction(typedIp);
        startBtn.style.backgroundColor = '#000000';
        };
}
catch(e) {
    handleError("Index", e as Error);
};
});

ipInputElement?.addEventListener('focus',()=> {
    startBtn.style.backgroundColor = '#000000';
    errorSpan!.innerText = "";
});

function removeMapContainer(){
    var container = document.getElementById('map') as HTMLElement;
    if (container) {
        container.outerHTML = '<div id="map"></div';
    }
};

export async function getAPIKey() {
    try {
        if (typeof process.env.API_KEY !== "undefined") {
            const API_KEY: string = process.env.API_KEY;
            return API_KEY;
        } else {
            throw (new APIError("API Key could not be retrieved"))
        };
        // const API_Key: string = getSecretKey();
        // return API_Key;
    }
    catch(e) {
        handleError("API", e as Error);
    }
};