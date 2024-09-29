const User = require("../models/user.model")
const bcrypt=require("bcryptjs")

exports.store = async (req, res) => {
    try {
        const {password}=req.body;
        const hashedPassword=await bcrypt.hash(password,10)
        req.body.password=hashedPassword;
        const user = await User.create(req.body)
        res.json({ message: "User created Successfully!", status: 200, success: true, user })
    }
    catch (err) {
        console.log(err)
    }

}
exports.login = async (req, res) => {
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email:email})
        if(!user){
            return res.json({message:"User not found",success:false,status:404})
        }
        const comparePassword=await bcrypt.compare(password,user.password)
        if(comparePassword){
            res.json({ message: "User Login Successfully!", status: 200, success: true, user })
        }
        else{
        return res.json({message:"Invalid Credentials",status:403,success:false})
        }
    }
    catch (err) {
        console.log(err)
    }

}
exports.index = async(req, res) => {
    try {
        const users=await User.find();
        res.json({ message: "User fetched Successfully!",status: 200, success: true, users })
    }
    catch (err) {
        console.log(err)
    }
}

exports.get = async(req, res) => {
    try {
        const {id}=req.params;
        const user=await User.findOne({_id:id});
        if(!user){
            return res.json({message:"User not found",success:false,status:404})
        }
        res.json({ message: "User fetched Successfully!",status: 200, success: true, user })
    }
    catch (err) {
        console.log(err)
    }
}

exports.destroy = async(req, res) => {
    try {
        const {id}=req.params;
        const user=await User.findOneAndDelete({_id:id});
        if(!user){
            return res.json({message:"User not found",success:false,status:404})
        }
        res.json({ message: "User deleted Successfully!",status: 200, success: true })
    }
    catch (err) {
        console.log(err)
    }
}

exports.update = async(req, res) => {
    try {
        const {id}=req.params;
        const user=await User.findOneAndUpdate({_id:id},req.body,{new:true});
        if(!user){
            return res.json({message:"User not found",success:false,status:404})
        }
        res.json({ message: "User Updated Successfully!",status: 200, success: true,user })
    }
    catch (err) {
        console.log(err)
    }
}