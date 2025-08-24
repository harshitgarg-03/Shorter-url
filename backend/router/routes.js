import express, { Router } from "express"
import { urlSection, getUrlsection } from "../userController/controller.js"

export const route = express.Router()

route.post("/abc", urlSection)
route.get("/abc/:code", getUrlsection)