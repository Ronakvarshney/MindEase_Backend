const express = require("express");
const app = express();
const cors = require("cors");
const dbConnect = require("./Config/dbConnect");
const userRoute = require("./Routers/user.route");
const cookieParser= require("cookie-parser");
require("dotenv").config();

dbConnect();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin : `${process.env.FRONTEND_URI}` ,
    methods : ["POST" , "GET" , "PUT" , "DELETE"] ,
    credentials : true
}));
app.use("/api" , userRoute);

app.listen("3000" , ()=>{
    console.log("server started")
})