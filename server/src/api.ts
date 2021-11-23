import {Express} from "express";
import {Connection} from "mysql2/promise";
import {FilterParams, NewLog} from "./types";

export default function setupAPI(app: Express, connection: Connection) {

    app.post("/logs/insert", async (req, res) => {
        // add log
        const data = req.body as NewLog;
        try {
            await connection.execute(`INSERT INTO LOGS (text, timestamp) VALUES (?, now())`, [data.text])
            res.sendStatus(200);
        } catch (e) {
            res.sendStatus(500);
            console.log(e)
        }
    })

    app.get("/logs/get", async (req, res) => {
        // get log
        const params: FilterParams = req.query;
        try {
            let query = `SELECT * FROM V_LOGS`;
            const values = [];
            const whereClauses = []

            if (params.text) {
                whereClauses.push(`MATCH(text) AGAINST (?)`);
                values.push(params.text);
            }

            if (params.startTime) {
                whereClauses.push(`timestamp >= ?`);
                values.push(Number(params.startTime));
            }

            if (params.endTime) {
                whereClauses.push(`timestamp <= ?`);
                values.push(Number(params.endTime) + 24 * 60 * 60 * 1000 /* add one day */);
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

    // delete log by primary key "id"
    app.delete("/logs/delete", async (req, res) => {
        const id = req.query.id;
        try {
            await connection.execute(`DELETE FROM LOGS WHERE id = ?`, [id])
            res.sendStatus(200);
        } catch (e) {
            res.sendStatus(500);
            console.log(e)
        }
    })
}