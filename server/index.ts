import * as express from 'express'
import * as cors from 'cors'

const app = express()

app.use(cors({
    origin: true
}))

app.listen(2100)