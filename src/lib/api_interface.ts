import type {FilterParams, NewLog} from "../../server/src/types";

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

// get logs from localhost:2100/logs/get by get request passing query params
export async function getLogs(filterParams: FilterParams) {
    const url = new URL("http://localhost:2100/logs/get");

    // add query params to url
    for (const [key, value] of Object.entries(filterParams))
        if (value)
            url.searchParams.append(key, value);

    const response = await fetch(url.toString(), {method: "GET"});
    return await response.json();
}

// delete log by id from localhost:2100/logs/delete by delete request
export function deleteLog(id: number) {
    return fetch(`http://localhost:2100/logs/delete?id=${id}`, {method: "DELETE"});
}