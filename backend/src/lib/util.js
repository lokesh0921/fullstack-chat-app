import jwt from 'jsonwebtoken';

export  const generateToken = (userId , res) => {
     const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "7d",
     });

     res.cookie("jwt", token ,{
        maxAge: 7 * 24 * 60 * 60 * 1000,  //ms
        httpOnly: true,   // prvent xss attackes cross-site scription attacks
        sameSite: "strict", // csrf attacks  cross-sitse forgery attaacks
        secure: process.env.NODE_ENV !== "development",
     })

     return token;  
}