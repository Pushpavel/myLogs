import {Express} from "express";
import {Connection} from "mysql2/promise";
import {NewLog} from "./types";

export default async function setupAPI(app: Express, connection: Connection) {

    app.post("/logs/insert", async (req, res) => {
        // add log
        const data = req.body as NewLog;
        try {
            await connection.execute(`INSERT INTO LOGS (text, timestamp) VALUES (?, now())`, [data.text])
        } catch (e) {
            res.sendStatus(500);
        }
        res.sendStatus(200);
    })

    app.get("/logs/get", async (req, res) => {
        // get log
        const searchString = req.query.searchString as string;
        try {
            let result;
            if (searchString)
                result = await connection.execute(`SELECT * FROM v_logs WHERE MATCH(text) AGAINST (?)`, [searchString])
            else
                result = await connection.execute(`SELECT * FROM v_logs`)
            res.send(result[0])
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    })
}