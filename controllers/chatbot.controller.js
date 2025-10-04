import {mentalHealthQA} from "../data/Ai_trenddata.js"
import {generateChat} from "../Services/ChatAiModel.js"

export const ChatbotController = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Input text not found",
      });
    }

    const key = message.toLowerCase().trim();
    const reply =
      mentalHealthQA[key] ||
      "I’m here to help, but I didn’t understand that. Can you try rephrasing?";

    return res.status(201).json({
      success: true,
      message: "Reply from chatbot fetched successfully",
      reply,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};




export const AskAnythingChatbotController = async(req , res)=>{
  try{
   const{message} = req.body;
   if(!message){
    return res.status(404).json({
      success : false ,
      message : "first provide the chat input"
    })
   };

   const response = await generateChat(message);
   return res.status(200).json({
    success : true ,
    message : "response get",
    reply : response.resp
   })
  }
  catch(error){
    return res.status(500).json({
      success : false ,
      message :error.message
    })
  }
}


