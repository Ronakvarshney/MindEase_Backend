import { Events } from "../Models/event.model.js";
import { User } from "../Models/user.model.js";

export const GetFundraiseEvents = async (req, res) => {
  try {
    const events = await Events.find();
    if (!events) {
      return res.status(401).json({
        success: false,
        message: "Events were not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "event data fetches",
      events,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const GetFundraiseEvent = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id)
      return res.status(401).json({
        success: false,
        message: "event id not exists",
      });

    const event = await Events.findById({ _id: id });
    return res.status(201).json({
      success: true,
      message: "event details fetches",
      event,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const EventParticipation = async (req, res) => {
  try {
    const { email, event } = req.body;
    console.log(email, event);
    if (!email)
      return res.status(404).json({
        success: false,
        message: "user not found",
      });

      const existingEnrolled = await User.findOne({events : event._id});
      if(existingEnrolled){
        return res.status(201).json({
            message : "Already Enrolled"
        })
      }

    const update = await User.findOneAndUpdate(
      { email: email },
      { $addToSet: { events: event._id } }, // addtoset jo h duplicate event id ko add nhi krta h 
      { new: true }
    );

    if (!update) {
      return res.status(500).json({
        message: "event already is there",
      });
    }

    return res.status(201).json({
      message: "participation done",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
