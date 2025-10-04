import express from "express"
import cors from "cors"
import {dbConnect} from "./Config/dbConnect.js"
import {route} from "./Routers/user.route.js"
import http from "http"
import{Server} from "socket.io"
import cookieParser from "cookie-parser";
import dotenv from "dotenv"
dotenv.config();
const app = express();
dbConnect();
app.use(cookieParser());
app.use(express.json());

app.use(cors({
    origin : `${process.env.FRONTEND_URI}` ,
    methods : ["POST" , "GET" , "PUT" , "DELETE"] ,
    credentials : true
}));

const server = http.createServer(app);
const io = new Server(server , {
    cors : {
    origin : `${process.env.FRONTEND_URI}` ,
    methods : ["GET" , "POST"],
    credentials : true
    }
})

io.on("connection" , (socket)=>{
    const{email} = socket.handshake.auth ;
    console.log(email);
    console.log("socket connected" , socket.id);

    socket.on("disconnect" , ()=>{
       console.log("socket disconnected")
    })

    socket.on("send_message" , ({email , message , group})=>{
        console.log(message);
        io.emit("receive_message" , {email , message , group});
    })

    socket.on("join_group" , (group)=>{
        console.log(`${email} joined in this ${group}`);

        socket.join(group);
        io.to(group).emit("user_joined" , {email});
    })
})


app.use("/api" , route);

server.listen("3000" , ()=>{
    console.log("server started")
})