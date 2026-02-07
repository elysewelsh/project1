

startBtn?.addEventListener('click',()=> {
    const typedIp = ipInputElement.value;
    run(typedIp) 
// run returns toFill with variables from API response
        .then((toFill) => {
            if (typeof toFill !== "undefined") {
// map function goes here


// adds information from API to designnated display spaces in HTML
                addressSpace.innerText = (`${toFill.ip}`);
                locationSpace.innerText = (`${toFill.city}, ${toFill.state} ${toFill.zip}`);
                timeZoneSpace.innerText = (`UTC ${toFill.timezone}`);
                ispSpace.innerText = (`${toFill.isp}`);
            }
            return undefined;
        })
});

