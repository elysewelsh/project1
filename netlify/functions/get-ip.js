export const handler = async (event) => {
    try {
        const ipInput = event.queryStringParameters?.ipAddress;
        const apiKey = process.env.API_KEY;
        if (!ipInput)
            return { statusCode: 400, body: "IP Required" };
        // Just fetch and return. No fancy logic.
        const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipInput}`);
        const data = await response.json();
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    }
    catch (error) {
        return { statusCode: 500, body: String(error) };
    }
};
