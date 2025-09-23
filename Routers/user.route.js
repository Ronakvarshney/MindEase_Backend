const express = require("express");
const {
  UserRegister,
  UserLogin,
  UserProfile,
  userLogout,
  ForgotPassword,
  ResetPassword,
} = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/TokenMiddleware");
const { generateContent } = require("../Services/AiModel");
const generateChat = require("../Services/ChatAiModel");
const { BookingController } = require("../controllers/booking.controller");
const {
  GetFundraiseEvents,
  GetFundraiseEvent,
} = require("../controllers/fundraise.controller");
const { ChatbotController } = require("../controllers/chatbot.controller");

const route = express.Router();

route.post("/register", UserRegister);
route.post("/login", UserLogin);
route.get("/profile", authMiddleware, UserProfile);
route.post("/logout", authMiddleware, userLogout);
route.post("/generate-question", authMiddleware, generateContent);
route.post("/generate-chat" , authMiddleware ,  ChatbotController);
route.post("/booking", authMiddleware, BookingController);
route.get("/fundraise", GetFundraiseEvents);
route.post("/fundraiseEvent", GetFundraiseEvent);
route.post("/forgot-password" , ForgotPassword )
route.post("/reset-password" , ResetPassword )


module.exports = route;
