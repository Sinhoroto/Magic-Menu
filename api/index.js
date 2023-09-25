import express from "express"
import restaRoutes from "./routes/restaurants.js"
import authRoutes from "./routes/auth.js"
import menuRoutes from "./routes/menu.js"
import cors from "cors";
import {db} from "./db.js"
import cookieParser from "cookie-parser";

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use(cors());

app.get("/api/get",(req,res)=>{
    console.log("entrou em api/get")
    db.query("SELECT * FROM user", (err,result)=>{
        res.send(result);
    });
});

app.use("/api/restaurants", restaRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/menu", menuRoutes)

app.listen(8800, ()=>{
    console.log("Server is running")
})