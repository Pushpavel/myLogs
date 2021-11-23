import { Connection } from "mysql2/promise";

// creates database and its definitions if they don't exist
export async function setupDatabase(connection: Connection) {
    await connection.execute(`create database if not exists my_logs`)
    await connection.changeUser({ database: 'my_logs' });
    await connection.execute(`create table if not exists LOGS (
        id integer auto_increment primary key,
        text text not null,
        timestamp datetime not null,
        fulltext (text)
    )`)
    await connection.execute(`create or replace view V_LOGS as 
    select id,text, ROUND(UNIX_TIMESTAMP(timestamp)*1000) as timestamp 
    from LOGS`)
}