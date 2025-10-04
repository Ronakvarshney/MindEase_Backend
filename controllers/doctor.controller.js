import { Doctor } from "../Models/doctor.model";

export const FetchAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    if (!doctors) {
      return res.status(404).json({
        success: false,
        message: "doctors not found",
      });
    }

    return res.status(201).json({
      success: true,
      message: "all doctors fetches successfully",
      doctors,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const GetDoctorById = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id)
      return res.status(404).json({
        success: false,
        message: "please provide credentials",
      });

    const doctor = await Doctor.findById({ _id: id });
    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "doctor doesn`t exists",
      });
    }

    return res.status(201).json({
      success: true,
      message: "doctor fetch successfully",
      doctor,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const DeleteDoctor = async (req, res) => {
  try {
    const { role } = req.user;
    const { id } = req.body;
    if (!role) {
      return res.status(500).json({
        success: false,
        message: "you are not authenticate",
      });
    }

    if (role == "patient") {
      return res.status(500).json({
        success: false,
        message: "you are not authorished",
      });
    }

    const doctorRemove = await Doctor.findByIdAndDelete({ _id: id });
    return res.status(201).json({
      success: true,
      message: "doctor deleted successfully",
      doctorRemove,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const AddNewDoctor = async (req, res) => {
  try {
    const{name , email , profile , specialist , experience , phoneNo , available} = req.body ;
    const{role} = req.user ;
    if(!role){
      return res.status(500).json({
        success : false ,
        message : "you are not authenticate"
      })
    }
    if (role != "admin") {
      return res.status(401).json({
        message: "you are not authorished to create",
      });
    }

    if(!name || !email || !specialist || !experience || !phoneNo || !available){
      return res.status(404).json({
        message : "Please provide all credentials"
      })
    }

    const exisitingdoctor = await Doctor.findOne(email);
    if(exisitingdoctor){
      return res.status(500).json({
        message : "Doctor already exists"

      })
    }

    const newdoctor = await Doctor.create({
      name ,
      email ,
      phoneNo ,
      Specialist : specialist ,
      available ,
      Experience : experience,
      profileImage : profile
      
    })

    return res.status(201).json({
      success : true ,
      message : "new doctor created",
      newdoctor
    })
    
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
