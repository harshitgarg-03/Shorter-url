import mongoose from "mongoose"

export const connectiondb = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "Shorter-URL"
    }).then(() => {
        console.log("Database is connected ..!");
        
    }).catch((err) => {
        console.log(err.message);
        
        console.log("Database is not connected..!");
        
    })
}