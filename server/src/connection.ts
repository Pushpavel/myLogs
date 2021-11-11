import promptSync from "prompt-sync";
import sql, {ConnectionOptions} from 'mysql2/promise'

export function getConnectionInfo(): ConnectionOptions {
    // io setup
    const prompt = promptSync()

    // get mysql server info from user
    const mysqlHost = prompt('Enter mysql host: (localhost) ', 'localhost')
    const mysqlPort = Number(prompt('Enter mysql port: (3316) ', '3316' /*todo: change this to 3306*/))
    const mysqlUser = prompt('Enter mysql user: (root) ', 'root')
    const mysqlPassword = prompt('Enter mysql password: (7856) ', '7856'/*todo: remove this*/)

    return {
        host: mysqlHost,
        port: mysqlPort,
        user: mysqlUser,
        password: mysqlPassword,
    }
}

// initiates connection to MySQL
export async function connectToMySQL(connectionInfo: ConnectionOptions) {
    console.log("connecting...\n")

    // connect through mysql2
    const connection = await sql.createConnection(connectionInfo)
    await connection.connect()

    console.log("connected to MySql\n")
    return connection
}
