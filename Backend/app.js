const express= require("express");
const app=express();
app.use(express.json())
const errorMiddleware= require("./middleware/error");
// Route Imports
const product=require("./routes/productRoute");
const user = require("./routes/UserRoutes");
const order=require("./routes/orderRoute");
app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1",order);
//Middleware for errors 
app.use(errorMiddleware);

module.exports=app