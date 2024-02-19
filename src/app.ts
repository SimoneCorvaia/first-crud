import express from "express";
import {router as userApi} from "./routes/user.routes"

const app = express ();
const PORT = 3000;

app.get("/", (req,res) => {
    res.json({message: "server online "})
})

app.use("/users",userApi);

app.listen(PORT, ()=>{
    console.log(`server is online at http://localhost:${PORT} `)
});
