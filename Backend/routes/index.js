const express=require("express")
const router=express.Router();
const userRoute=require("../routes/user.route")
const productRoute=require("../routes/product.route")
const todoRoute=require("../routes/todo.route")



router.use("/user",userRoute)
router.use("/product",productRoute)
router.use("/todo",todoRoute)

module.exports=router;