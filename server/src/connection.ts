import promptSync from "prompt-sync";
import sql, {ConnectionOptions} from 'mysql2/promise'

export function getConnectionInfo(): ConnectionOptions {
    // io setup
    const prompt = promptSync()

    // get mysql server info from user
    const mysqlHost = prompt('Enter mysql host: (localhost) ', 'localhost')
    const mysqlPort = Number(prompt('Enter mysql port: (3306) ', '3306'))
    const mysqlUser = prompt('Enter mysql user: (root) ', 'root')
    const mysqlPassword = prompt('Enter mysql password: (Qwerty@1) ', 'Qwerty@1')

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
