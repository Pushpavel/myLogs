import express from 'express'
import cors from 'cors'
import {connectToMySQL, getConnectionInfo} from "./src/connection";
import setupAPI from "./src/api";
import {setupDatabase} from "./src/database";

// self invoking async function as we can't use top level await in nodejs
(async function main() {

    // server setup
    const app = express()
    app.use(cors({origin: true}))
    app.use(express.json())

    // connect to MySql
    const connectionInfo = getConnectionInfo()
    const connection = await connectToMySQL(connectionInfo)

    // setup api
    await setupDatabase(connection)
    setupAPI(app, connection)

    console.log("listening...")
    app.listen(2100)
})()
