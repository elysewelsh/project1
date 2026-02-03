import { getAPIKey } from "./secret.js";
import { ipInput } from "../index.js"

// interface IipInfo {
//         ip: string, //ip address
//         location: {
//             country: string,
//             region: string, //state
//             city: string, //city
//             lat: number,
//             lng: number,
//             postalcode: number, //zip
//             timezone: string, //timezone
//             geonameId: number, //necessary?
//         },
//         isp: string //isp
//         }

export async function handleRequest() {
    try {
        const API_KEY = getAPIKey();
        const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipInput}`) // returns a promise
        const formatResponse = await response.json() // format data to json 
        console.log (formatResponse);
    } catch(e) {
        console.log(e);
    }
}
handleRequest();


// export const ipInfo: IipInfo = {
//     ip: formatResponse.ip,
//     location: {
//         country: string,
//         region: string, //state
//         city: string, //city
//         lat: number,
//         lng: number,
//         postalcode: number, //zip
//         timezone: string, //timezone
//         geonameId: number, //necessary?
//     },
// isp: string //isp
// };


// ip: string, location: {country: string, region: string, city: string, lat: number, lng: number, postalCode: string, timezone: string, }




// EXAMPLE OUTPUT:
// {
//   ip: '10.0.0.XX',
//   location: {
//     country: 'ZZ',
//     region: '',
//     city: '',
//     lat: 0,
//     lng: 0,
//     postalCode: '',
//     timezone: ''
//   },
//   isp: ''
// }

// {
//   ip: '10.134.XX.XX',
//   location: {
//     country: 'ZZ',
//     region: '',
//     city: '',
//     lat: 0,
//     lng: 0,
//     postalCode: '',
//     timezone: ''
//   },
//   isp: ''
// }

// {
//   ip: '138.128.140.72',
//   location: {
//     country: 'US',
//     region: 'Illinois',
//     city: 'Chicago Loop',
//     lat: 41.88407,
//     lng: -87.6333,
//     postalCode: '',
//     timezone: '-06:00',
//     geonameId: 8436065
//   },
//   as: {
//     asn: 49544,
//     name: 'i3Dnet',
//     route: '138.128.140.0/22',
//     domain: 'i3d.net',
//     type: 'NSP'
//   },
//   isp: 'i3D.net'
// }
