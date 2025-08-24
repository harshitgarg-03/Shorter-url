import express from "express"
import {config} from "dotenv"
import { connectiondb } from "./database/connection.js"
import { route } from "./router/routes.js"
import cors from "cors"

export const app = express()
app.use(express.json())
app.use(cors())
config({path: "./config.env"})

app.use("/api/v1", route)


connectiondb()
