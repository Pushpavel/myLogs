import {Express} from "express";
import {Connection} from "mysql2/promise";
import {FilterParams, NewLog} from "./types";

export default function setupAPI(app: Express, connection: Connection) {

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
            const whereClauses = []

            if (params.text) {
                whereClauses.push(`MATCH(text) AGAINST (?)`);
                values.push(params.text);
            }

            if (params.startTime) {
                whereClauses.push(`timestamp >= ?`);
                values.push(params.startTime);
            }

            if (params.endTime) {
                whereClauses.push(`timestamp <= ?`);
                values.push(params.endTime + 24 * 60 * 60 /* add one day */);
            }

            if (whereClauses.length != 0)
                query += ` WHERE ` + whereClauses.join(" AND ");

            query += ` ORDER BY timestamp ${params.descending ? 'DESC' : 'ASC'}`;

            const result = await connection.execute(query, values)
            res.send(result[0])
        } catch (e) {
            console.error(e)
            res.sendStatus(500)
        }
    })
}