import Users from "../models/users.js";

export const signin = async (req, res) => {

    console.log("inside log in");
    // things that we sent over in the sing in request of front end
    const { email, password } = req.body;
   try {

    // search in the User collection if the email exists
    const existingUser = await Users.findOne({email});

    // if they don't return a 404 error saying that they dont exits
        if(!existingUser) return res.status(404).json({message: "User doesn't exist."});
        
    // now we must check if the password provided matches the one of our existing user in our database --> 
    

        const isPasswordCorrect = await password == existingUser.password;

        if(!isPasswordCorrect) return res.status(404).json({message: "Provided password is wrong"});
        

       return res.status(200).json({result: existingUser});


   } catch (error){
       return res.status(500).json({message: "Something went wrong."});

   }

}