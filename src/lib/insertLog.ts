import type {Log} from "../../server/src/types";

// inserts log at localhost:2100/logs/insert by post request
export function insertLog(log: Log) {
    return fetch("http://localhost:2100/logs/insert", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(log)
    });
}