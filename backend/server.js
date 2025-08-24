import {app} from "./index.js"

app.listen(process.env.PORT, () => {
    console.log(`Server is started at ${process.env.PORT}`);
    
})