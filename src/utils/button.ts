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
        throw (new DataError("Not a valid IP address"));
    };
}
catch(e) {
    handleError("Button", e as Error);
};
};


