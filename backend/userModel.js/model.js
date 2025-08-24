import mongoose, { Schema } from "mongoose"

const UrlSchema = mongoose.Schema({
    originalurl : String,
    Shorturl : String
})

export const URL = mongoose.model("UrlSchema", UrlSchema)