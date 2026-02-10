
import { DataError, APIError, handleError } from "../utils/errorHandler"
// import { getAPIKey } from "..";




export interface IipInfo {
        ip: string, //ip address
        location: {
            country: string,
            region: string, //state
            city: string, //city
            lat: number,
            lng: number,
            postalcode: string, //zip
            timezone: string, //timezone
            geonameId?: number, //necessary?
        },
        as?: {
            as?: number,
            name?: string,
            route?: string,
            domain?: string,
            type?: string
        },
        isp: string //isp
        }


export async function handleRequest(ipInput: string) {
    try {
        // const API_KEY = await getAPIKey();
        // const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipInput}`);
        const response = await fetch(`/.netlify/functions/get-ip?ipAddress=${ipInput}`);
        if (response.status === 200 || response.status === 304) {
            const replyObject: IipInfo = await response.json();
            if (typeof replyObject !== "undefined") {
                return replyObject;
            } else {
                throw (new DataError("API response was undefined"));
            };
        } else {
            throw (new APIError("API call was unsuccessful"));
        }
    } catch(e) {
        handleError("API", e as Error);
    }
}
