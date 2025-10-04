import {transporter} from "../../Config/email.js"
import {resetPasswordEmailTemplate} from "./templates/resetEmailtemplate.js"



export const resetEmail  = async(existingUser , resetUrl)=>{
    try{
      const mailOptions = {
        from : `"MindEase" <ronakvarshney7100@gmail.com>`,
        to : existingUser.email ,
        subject : "Reset Password" ,
        html : resetPasswordEmailTemplate(existingUser.name , resetUrl)
      }

      await transporter.sendMail(mailOptions);
      return true ;
    }
    catch(error){
       console.log("error while sending email" , error.message);
       return false ;
    }
}

