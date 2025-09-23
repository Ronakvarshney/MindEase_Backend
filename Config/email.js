const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service : "gmail" ,
    auth : {
        user : "ronakvarshney7100@gmail.com" ,
        pass : "rtuossmkpvmouetv"
    }
})

module.exports = transporter ;