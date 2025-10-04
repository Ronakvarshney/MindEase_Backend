// import {GoogleGenerativeAI} from "@google/generative-ai"

// const apikey = "";
// const genAI = new GoogleGenerativeAI(apikey);
// const model = genAI.getGenerativeModel({
//     model : "gemini-2.0-flash"
// });



// const generateContent = async(req , res)=>{
    
//   const prompt = `Generate a Quiz which help to analyze the Mental Health condition of an individual and returns a quiztitle , quizdescription and questions array with their options and correctanswertext and array of scoring which has two parameters - range and message , and range is upto the numbers of questions and not show any explanation and key improvement and given in well manner JSON format `;
   
//   try{
//     const result = await model.generateContent(prompt);
//     const response = await result.response.text();

//     return res.json({
//         success : true ,
//         msg : "Data generated successfully" ,
//         response 
//     })

//   }
//   catch(error){
//     return res.json({
//         success : false ,
//         msg : error.message
//     })
//   }
// }

// module.exports = {generateContent} ;
