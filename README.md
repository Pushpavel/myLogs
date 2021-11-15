# myLogs

- __Description__ : personal general purpose logging system
- __Tech stack__ : svelte, MySQL
- __Roll no__ : CS19B1042, CS19B1065, CS19B1055
- __Course__ : CS309 - Database Management System Laboratory

## Idea

To build a logging system that is simple and flexible.

### Overview

- Log is considered as the primary entity in our system.
- A server is started and listening to the client, with MySQL running in the background.
- Each log is accompanied with a timestamp.
- A Search bar is used to search for logs by using fulltext based index. 

### Features

- User could log daily activities, in the text area and save it in the database.
- User could search by using fulltext based index.

## Architecture

### Components

- MySQL
- Server
- Svelte web app

### Tables in Database
- logs(id, text, timestamp)
