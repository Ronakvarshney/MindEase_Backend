import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmPassword: {
      type: String,
      required: true,
    },
    resetToken: {
      type: String,
    },
    resetTokenExpires: {
      type: Date,
    },
    profileImage: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      enum: ["patient", "admin"],
      default: "patient",
    },
    progress: {
      mentalhealth: {
        type: String,
        default: "",
      },
    },
    appointment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Appointment",
    },
    events : [
      {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "Events"
      }
    ]
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);
