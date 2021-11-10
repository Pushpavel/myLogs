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
export function getLog() {
    fetch("http://localhost:2100/logs/get", {
        method: "GET",
        //headers: {
        //    "Content-Type": "application/json"
        //},
    }).then((res)=>{
        return res.json();
    }).then((r)=>{console.log(r)});
}
