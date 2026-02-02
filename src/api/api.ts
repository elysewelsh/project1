// variables map
        // ip: string, //ip address
        // location {
        //     country: string,
        //     region: string, //state
        //     city: string, //city
        //     lat: number,
        //     lng: number,
        //     postalcode: number, //zip
        //     timezone: string, //timezone
        //     geonameId: number, //necessary?
        // }
        // as {
        //     name: string, //isp
        // }


import { getAPIKey } from "./secret.js";
import { ipInput } from "../index.js"


export async function handleRequest() {
    try {
        const API_KEY = getAPIKey();
        const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipInput}`) // returns a promise
        const users = await response.json() // format data to json 
        for (let user of users) {
            console.log('id: ' + user.id + ', name: ' + user.name)
        }
        console.log('total users: ', users.length);
    } catch(e) {
        console.log(e);
    }
}

handleRequest();