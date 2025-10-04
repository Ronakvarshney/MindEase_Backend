import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
    username : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "User"
    },
    doctors : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "Doctor"
    },
    time : {
        type : String ,
        required : true 
    },
    date : {
        type : Date ,
        required : true
    },
    suffringFrom : {
        type : String,
        required : true
    },
    Symtoms : {
        type : String ,
        required : true
    },
    contactNo : {
        type : String ,
        required : true
    },
    mode : {
        type : String ,
        enum : ["online" , "offline"],
        default : "online"
    },
    duration : {
        type : String ,
        required : true
    },



} , {timestamps : true});


export const Appointment = mongoose.model("Appointment" , AppointmentSchema);