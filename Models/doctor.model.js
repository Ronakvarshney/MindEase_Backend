import mongoose from "mongoose";

const DoctorSchema = new mongoose.model(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    profileImage: {
      type: String,
    },
    phoneNo : {
      type : String ,
      required : true
    },
    Specialist: {
      type: String,
      required: true,
    },
    available : {
      type : String ,
      required : true
    },
    Experience: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);


export const Doctor = mongoose.model("Doctor" , DoctorSchema);