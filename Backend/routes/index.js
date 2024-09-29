const express=require("express")
const router=express.Router();
const userRoute=require("../routes/user.route")
const productRoute=require("../routes/product.route")



router.use("/user",userRoute)
router.use("/product",productRoute)





module.exports=router;