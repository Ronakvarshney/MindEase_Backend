import express from "express";
import {
  UserRegister,
  userLogout,
  UserLogin,
  UserProfile,
  ForgotPassword,
  ResetPassword,
} from "../controllers/auth.controller.js";

import { authMiddleware } from "../middlewares/TokenMiddleware.js";
// import {generateContent} from "../Services/AiModel.js"
// const { generateContent } = require("../Services/AiModel");
import { generateChat } from "../Services/ChatAiModel.js";
import {
  EventParticipation,
  GetFundraiseEvent,
  GetFundraiseEvents,
} from "../controllers/fundraise.controller.js";
import {
  ChatbotController,
  AskAnythingChatbotController,
} from "../controllers/chatbot.controller.js";
import { GetAllBootcamps } from "../controllers/bootcamp.controller.js";

export const route = express.Router();

route.post("/register", UserRegister);
route.post("/login", UserLogin);
route.get("/profile", authMiddleware, UserProfile);
route.post("/logout", authMiddleware, userLogout);
// route.post("/generate-question", authMiddleware, generateContent);
route.post("/generate-chat", authMiddleware, ChatbotController);
route.post("/generate-chat3", authMiddleware, AskAnythingChatbotController);
// route.post("/booking", authMiddleware, BookingController);
route.get("/fundraise", GetFundraiseEvents);
route.post("/fundraiseEvent", GetFundraiseEvent);
route.post("/eventparticipate" , authMiddleware , EventParticipation)
route.post("/forgot-password", ForgotPassword);
route.post("/reset-password", ResetPassword);



route.get("/bootcamps" , GetAllBootcamps);