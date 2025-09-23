
const Event = require("../Models/event.model");

const GetFundraiseEvents=async(req , res)=> {
    try{
       const events = await Event.find();
       if(!events){
        return res.status(401).json({
            success : false ,
            message : "Events were not found"
        })
       }

       return res.status(200).json({
        success : true ,
        message : "event data fetches",
        events
       })
    }
    catch(error){
        return res.status(500).json({
            success : false ,
            message : error.message
        })
    }
    
}



const GetFundraiseEvent = async(req , res)=>{
    try{
      const{id} = req.body ;
      if(!id) return res.status(401).json({
        success : false ,
        message : "event id not exists"
      })

      const event = await Event.findById({_id : id});
      return res.status(201).json({
        success : true ,
        message : "event details fetches",
        event
      })
    }
    catch(error){
        return res.status(500).json({
            success : false ,
            message : error.message
        })
    }
}


module.exports = {GetFundraiseEvents , GetFundraiseEvent};
