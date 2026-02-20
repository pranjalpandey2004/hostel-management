import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//register controller'

export const registerUser = async (req, res) => {
    try {
        const {name, email, password, role} = req.body;

        //check if user already exists or not 
        const existingUser = await User.findOne({email});
        
        if (existingUser) {
            return res.status(400).jason({message: "User already exists"});
        }

        //now hasing the password
        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);
        

        //creating the user in database
        const user = await User.create ({
            name,
            email,
            password: hashedPassword,
            role,
        });

        //generating the token for the user
        const token = jwt.sign(
            {id: user._id, role: user.role},
            process.env.JWT_SECRET,
            {expiresIn: "1d"}
        )
        res.status(201).json({
            message: "User registered successfully",
            token,
                    
        });
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}

/*
LOGIN CONTROLLER 
*/

export const loginUser = async (req, res) => {
    try{
        const {email, password} = req.body;

        //check if user exists or not
        const user = await User.findOne({email});

        if (!user) {
            return res.status(400).json({message: "Invalid credentials"});

        }

        //compare password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({message: "Invalid credentials"});
        }

        //generating the token for the user
        const token = jwt.sign(
            {id: user._id, role: user.role},
            process.env.JWT_SECRET,
            {expiresIn: "1d"}
        );

        res.status(200).json({
            message: "User logged in successfully",
            token,
        });
        
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}
