import mongoose from "mongoose";
import Users from "../models/users.js";



export const getUsers = async (req, res) => {

    try {

        const AllUsers = await Users.find();
        console.log("FETCH")
        console.log(AllUsers)
        res.status(200).json(AllUsers);


        
    } catch (error) {

        res.status(404).json({message: error.message});
        
    }
   
 
 }