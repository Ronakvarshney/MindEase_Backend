import mongoose from "mongoose";

const BootcampSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    targetAudience: {
      type: String,
      required: true,
    },
    Reason: {
      type: String,
      required: true,
    },
    Organizer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    duration: {
      type: String,
      enum: ["30", "15", "45", "60"],
      required: true,
    },
  },
  { timestamps: true }
);

export const Bootcamp = mongoose.model("Bootcamp", BootcampSchema);
