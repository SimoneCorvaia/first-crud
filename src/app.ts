import express from "express";
import {router as userApi} from "./routes/user.routes"
import { router  as productApi } from "./routes/product.routes";

const app = express ();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req,res) => {
    res.json({message: "server online "})
})

app.use("/users",userApi);
app.use("/products",productApi)

app.listen(PORT, ()=>{
    console.log(`server is online at http://localhost:${PORT} `)
});
