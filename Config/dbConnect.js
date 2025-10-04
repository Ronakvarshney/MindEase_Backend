import mongoose from "mongoose";
export const dbConnect= async()=>{

    try{
       await mongoose.connect(`${process.env.MONGODB_URI}`);
       console.log("db connected successfully");
    }
    catch(error){
        console.log(error.message);
        console.log("error occurs while connecting");
    }
    
}

