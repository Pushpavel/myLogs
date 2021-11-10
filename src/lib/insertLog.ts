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