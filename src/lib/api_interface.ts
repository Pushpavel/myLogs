import type {NewLog} from "../../server/src/types";

// inserts log at localhost:2100/logs/insert by post request
export function insertLog(log: NewLog) {
    return fetch("http://localhost:2100/logs/insert", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(log)
    });
}

// get s all logs from localhost:2100/logs/all by get request passing searchString as query params
export async function getLogs(searchString: string) {
    const url = new URL("http://localhost:2100/logs/get");
    if (searchString)
        url.searchParams.append("searchString", searchString);
    const response = await fetch(url.toString(), {method: "GET"});
    return await response.json();
}
