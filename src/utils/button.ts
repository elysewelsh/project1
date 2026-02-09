import { isValidIP } from "./validateIPinput"
import { formatAPIdata } from "./formatAPIdata";
import { DataError, handleError } from "./errorHandler";
import { assignValues } from "./assignValues";
import { redrawMap } from "../api/leafletMaple";



export function buttonAction (typedIp: string) {
try {
    if (isValidIP(typedIp)) {
        formatAPIdata(typedIp)
            .then((pageFillInfo) => {
                if (typeof pageFillInfo !== "undefined") {
                    assignValues(pageFillInfo);
                    if (typeof pageFillInfo.coordinates !== "undefined") {
                        redrawMap(pageFillInfo.coordinates);
                    } else {
                        throw (new DataError("Coordinates undefined"));
                    };
                } else {
                    throw (new DataError("Formatted data undefined"));
                };
            });
    } else {
        throw (new DataError("this should really go in an error span"));
    };
}
catch(e) {
    handleError("Button", e as Error);
};
};



// returns pageFillInfo with variables from API response
        // .then((pageFillInfo: ) => {
        //     if (typeof pageFillInfo !== "undefined") {
// map function goes here


// adds information from API to designnated display spaces in HTML
//                 addressSpace.innerText = (`${toFill.ip}`);
//                 locationSpace.innerText = (`${toFill.city}, ${toFill.state} ${toFill.zip}`);
//                 timeZoneSpace.innerText = (`UTC ${toFill.timezone}`);
//                 ispSpace.innerText = (`${toFill.isp}`);
//             }
//             return undefined;
//         })
// });

