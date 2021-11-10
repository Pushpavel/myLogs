import {Express} from "express";
import {Connection} from "mysql2/promise";
import {FilterParams, NewLog} from "./types";

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
        const params: FilterParams = req.query;
        try {
            let query = `SELECT * FROM v_logs`;
            const values = [];

            if (params.text) {
                query += ` WHERE MATCH(text) AGAINST (?)`;
                values.push(params.text);
            }

            query += ` ORDER BY timestamp DESC`;

            const result = await connection.execute(query, values)
            res.send(result[0])
        } catch (e) {
            console.error(e)
            res.sendStatus(500)
        }
    })
}