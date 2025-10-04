import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  message: { type: String, required: true },
  sender: {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    username: { type: String, required: true },   // display name
    email: { type: String }                       // optional
  },
  recipients: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // multiple receivers
  deliveredTo: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // offline tracking
}, { timestamps: true });

export const MessageModel = mongoose.model("Message", MessageSchema);
