const { GoogleGenerativeAI } = require("@google/generative-ai");

const apikey = "";
const genAi = new GoogleGenerativeAI(apikey);
const model = genAi.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generateChat = async (input) => {
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
    return ({
      success: false,
      msg: error.message,
    });
  }
};

module.exports = generateChat;
