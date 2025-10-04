import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const apikey = process.env.GEN_API_KEY;
const genAi = new GoogleGenerativeAI(apikey);
const model = genAi.getGenerativeModel({
  model: "gemini-2.0-flash",
});

export const generateChat = async (input) => {
  console.log(input);
  try {
    const prompt = input?.trim();
    const content = await model.generateContent(prompt);

    const resp = content.response.text();

    return {
      success: true,
      msg: "data get extarcted successfully",
      resp,
    };
  } catch (error) {
    return {
      success: false,
      msg: error.message,
    };
  }
};
