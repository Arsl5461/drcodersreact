const Product = require("../models/product.model")

exports.store = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.json({ message: "Product created Successfully!", status: 200, success: true, product })
    }
    catch (err) {
        console.log(err)
    }

}
exports.index = async(req, res) => {
    try {
        const products=await Product.find();
        res.json({ message: "Products fetched Successfully!",status: 200, success: true, products })
    }
    catch (err) {
        console.log(err)
    }
}

exports.get = async(req, res) => {
    try {
        const {id}=req.params;
        const product=await Product.findOne({_id:id});
        if(!product){
            return res.json({message:"Product not found",success:false,status:404})
        }
        res.json({ message: "Product fetched Successfully!",status: 200, success: true, product })
    }
    catch (err) {
        console.log(err)
    }
}

exports.destroy = async(req, res) => {
    try {
        const {id}=req.params;
        const product=await Product.findOneAndDelete({_id:id});
        if(!product){
            return res.json({message:"Product not found",success:false,status:404})
        }
        res.json({ message: "Product deleted Successfully!",status: 200, success: true })
    }
    catch (err) {
        console.log(err)
    }
}

exports.update = async(req, res) => {
    try {
        const {id}=req.params;
        const product=await Product.findOneAndUpdate({_id:id},req.body,{new:true});
        if(!product){
            return res.json({message:"Product not found",success:false,status:404})
        }
        res.json({ message: "Product Updated Successfully!",status: 200, success: true,product })
    }
    catch (err) {
        console.log(err)
    }
}