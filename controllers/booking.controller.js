const userModel = require("../Models/user.model");

const BookingController = async (req, res) => {
    try {
        const { time, date  , doctor , user} = req.body;
        const id = req.user.id;
        console.log("id :" , id);
        const userid = req.user.userid;
        console.log("userid :" , userid)

        console.log(user)
        let existinguser ;
            if (id) {
                existinguser = await userModel.findByIdAndUpdate({_id : id}, {
                    $push: {
                        appointment : {
                            date : date ,
                            time : time ,
                            doctor : doctor ,
                            personalinfo : user
                        }

                    }
                }, { new: true })
            }
            else{
                existinguser = await userModel.findOneAndUpdate({userid : userid}, {
                    $set: {
                        "appointment.date": date,
                        "appointment.time": time ,
                        "appointment.doctor" : doctor
                    }
                }, { new: true })
            }

            if (!existinguser) {
                return res.json({
                    success: false,
                    msg: "user dont exists"
                })
            }

        
        console.log(time);
        console.log("date", date);

        return res.json({
            success: true,
            msg: "Appointment Booked Successfully",
            existinguser
        })
    }
    catch (error) {
        return res.json({
            success: false,
            msg: error.message
        })
    }
}

module.exports = { BookingController }