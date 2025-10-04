import { Bootcamp } from "../Models/bootcamps.js";

export const GetAllBootcamps = async (req, res) => {
  try {
    const bootcamps = await Bootcamp.find();
    if (!bootcamps) {
      return res.status(404).json({
        success: false,
        message: "bootcamps not found",
      });
    }

    return res.status(201).json({
      success: true,
      message: "Bootcamps fetches",
      bootcamps,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const GetBootcamp = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id)
      return res.status(404).json({
        success: false,
        message: "provide credentials first",
      });

    const bootcamp = await Bootcamp.findById({ id });
    if (!bootcamp)
      return res.status(404).json({
        success: false,
        message: "bootcamp not exists or may delete",
      });

    return res.status(201).json({
      success: true,
      message: "bootcamp data fetch",
      bootcamp,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const DeleteBootcamp = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id)
      return res.status(404).json({
        success: false,
        message: "provide credentials first",
      });

    const exisitingbootcamp = await Bootcamp.findByIdAndDelete([id]);
    if (!exisitingbootcamp)
      return res.status(401).json({
        success: false,
        message: "bootcamp not exists",
      });

    return res.status(201).json({
      success: true,
      message: "bootcamp deleted",
      exisitingbootcamp,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const CreateBootcamp = async (req, res) => {
  try {
    const { title, reason, subject, targetaudience, duration } = req.body;
    const { role, id } = req.user;
    if(!role || !id) return res.status(500).json({success :false , message : "you are not authenticated"})

    if (role != "admin") {
      return res.status(401).json({
        message: "you are not authorished to create",
      });
    }

    if(!title || !reason || !subject || !targetaudience || !duration){
        return res.status(404).json({
            success : false ,
            message : "Provide all credentials first"
        })
    }

    const exisitingbootcamp = await Bootcamp.findOne({ title, subject });
    if (exisitingbootcamp) {
      return res.status(500).json({
        message: "Bootcamp already exists",
      });
    }

    const newbootcamp = await Bootcamp.create({
      title,
      Reason: reason,
      subject: subject,
      targetAudience: targetaudience,
      duration: duration,
      Organizer: id,
    });

    return res.status(201).json({
      success: true,
      message: "new bootcamp created",
      newbootcamp,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


