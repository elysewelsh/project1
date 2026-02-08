import { LatLngLiteral } from "leaflet";

export interface ItoFill {
        coordinates: LatLngLiteral,
        isp: string,
        ip: string,
        city: string,
        state: string,
        timezone: string,
        zip: string
};

export class fillElements implements ItoFill {
    constructor (
        public coordinates: {
            lat: number,
            lng: number
        },
        public isp: string,
        public ip: string,
        public city: string,
        public state: string,
        public timezone: string,
        public zip: string) {};   
    };