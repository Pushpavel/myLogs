import {Express} from "express";
import {Connection} from "mysql2/promise";

export default function setupAPI(app: Express, connection: Connection) {
    app.post("/logs/insert", (req, res) => {
        // add log
    })

    app.get("logs/get", (req, res) => {
        // get log
    })
}