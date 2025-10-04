import jwt from "jsonwebtoken"
// Make sure to use the correct import for JWT

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token ;
    
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token not provided",
      });
    }

    jwt.verify(token, "secret", (err, decoded) => {  
      if (err) {
        return res.status(403).json({
          success: false,
          message: "Invalid or expired token",
        });
      }

      req.user = decoded;  // This can be useful to access user data in subsequent routes
      next(); 
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

