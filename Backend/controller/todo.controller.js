const Todo = require("../models/todo.model")

exports.store = async (req, res) => {
    try {
        const todo = await Todo.create(req.body)
        res.json({ message: "Todo created Successfully!", status: 200, success: true, todo })
    }
    catch (err) {
        console.log(err)
    }

}
exports.index = async(req, res) => {
    try {
        const todos=await Todo.find();
        res.json({ message: "todos fetched Successfully!",status: 200, success: true, todos })
    }
    catch (err) {
        console.log(err)
    }
}

exports.get = async(req, res) => {
    try {
        const {id}=req.params;
        const todo=await Todo.findOne({_id:id});
        if(!todo){
            return res.json({message:"todo not found",success:false,status:404})
        }
        res.json({ message: "todo fetched Successfully!",status: 200, success: true, todo })
    }
    catch (err) {
        console.log(err)
    }
}

exports.destroy = async(req, res) => {
    try {
        const {id}=req.params;
        const todo=await Todo.findOneAndDelete({_id:id});
        if(!todo){
            return res.json({message:"todo not found",success:false,status:404})
        }
        res.json({ message: "todo deleted Successfully!",status: 200, success: true })
    }
    catch (err) {
        console.log(err)
    }
}

exports.update = async(req, res) => {
    try {
        const {id}=req.params;
        const todo=await Todo.findOneAndUpdate({_id:id},req.body,{new:true});
        if(!todo){
            return res.json({message:"todo not found",success:false,status:404})
        }
        res.json({ message: "todo Updated Successfully!",status: 200, success: true,todo })
    }
    catch (err) {
        console.log(err)
    }
}