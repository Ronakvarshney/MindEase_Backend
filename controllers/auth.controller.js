import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../Models/user.model.js";
import {resetEmail} from "../Services/mail/resetEmail.js"

export const UserRegister = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
      return res.json({
        success: false,
        msg: "Please fill all credentials",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({
        success: false,
        msg: "User already registered",
      });
    }

    if (password != confirmPassword) {
      return res.status(500).json({
        success: false,
        message: "Password doesn't matches",
      });
    }

    let hashPassword;
    hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashPassword,
      confirmPassword: hashPassword,
    });

    await newUser.save();
    return res.status(200).json({
      success: true,
      msg: "User registered successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
};

export const UserLogin = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    console.log(email, password, role);
    if (!email || !password || !role) {
      return res.json({
        success: false,
        msg: "Please fill all credentials",
      });
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.json({
        success: false,
        msg: "User does not exist",
      });
    }

    const isCompare = bcrypt.compare(password, existingUser.password);
    if (!isCompare) {
      return res.json({
        success: false,
        msg: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        id: existingUser._id,
        email: existingUser.email,
        role: existingUser.role,
      },
      "secret",
      { expiresIn: "1h" }
    );

    res.cookie("token", token, {
      httpOnly: true, // Ensures the cookie is not accessible by JavaScript
      sameSite: "strict", // Helps protect against cross-site request forgery (CSRF)
      secure: process.env.NODE_ENV === "production", // Ensure it's secure in production
      path: "/", // Expiration time: 1 hour (matches the JWT expiration)
    });

    return res.status(200).json({
      success: true,
      msg: "Login successful",
      token,
      email: existingUser.email,
      role: existingUser.role,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
};

export const UserProfile = async (req, res) => {
  const usertoken = req.cookies.token;
  const logintoken = req.cookies.logintoken;
  const token = usertoken ? usertoken : logintoken;
  if (!token) {
    return res.json({
      success: false,
      msg: "token not find",
    });
  }
  const decode = jwt.verify(token, "secret");
  const email = decode.email;
  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    return res.json({
      success: false,
      msg: "user not exists",
    });
  }
  return res.json({
    success: true,
    existingUser,
  });
};

export const userLogout = async (req, res) => {
  try {
    // Clear the token cookie
    const id = req.user.id;
    const email = req.user.email;

    if (id) {
      res.clearCookie("token", {
        httpOnly: true, // Ensure it matches the original cookie settings
        sameSite: "Strict", // SameSite setting needs to match
        secure: process.env.NODE_ENV === "production", // Use 'secure' in production only
        path: "/", // Make sure the path matches
      });
    }

    return res.json({
      success: true,
      msg: "Logged out successfully",
    });
  } catch (error) {
    return res.json({
      success: false,
      msg: error.message,
    });
  }
};

export const ForgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email)
      return res.status(404).json({
        message: "credentials not found",
      });

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(500).json({
        message: "user not exists , Please signup first",
      });
    }

    const token = jwt.sign(
      { id: existingUser._id, email: existingUser.email },
      `${process.env.TOKEN_SECRET}`,
      { expiresIn: "5m" }
    );

    existingUser.resetToken = token;
    existingUser.resetTokenExpires = Date.now() + 5 * 60 * 1000;
    await existingUser.save();

    const reseturl = `${process.env.FRONTEND_URI}/reset-password?token=${token}`;
    const emailresponse = await resetEmail(existingUser, reseturl);
    if (!emailresponse) {
      return res.status(500).json({
        message: "error while sending email",
      });
    }

    return res.status(201).json({
      success: true,
      message: "password resetlink send successfully...",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const ResetPassword = async (req, res, next) => {
  try {
    const { password, resetToken } = req.body;
    if (!password || !resetToken) {
      return res.status(404).json({
        message: "provide all credentials",
      });
    }

    const decode = jwt.verify(resetToken, `${process.env.TOKEN_SECRET}`);
    const existingUser = await User.findOne({ email: decode.email });
    if (!existingUser) {
      return res.status(404).json({
        message: "User email doesn't exists",
      });
    }

    if (existingUser.resetToken !== resetToken) {
      return res.status(500).json({
        messsage: "Token mismatch or expires",
      });
    }

    if (Date.now() > existingUser.resetTokenExpires) {
      return res.status(500).json({
        message: "Token Expires , try again",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    existingUser.password = hashPassword;
    existingUser.confirmPassword = hashPassword;
    existingUser.resetTokenExpires = null;
    existingUser.resetToken = null ;
    await existingUser.save();

    return res.status(201).json({
      success: true,
      message: "Password change successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
