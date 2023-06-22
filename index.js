
const express = require("express");
const cors=require("cors");
require("dotenv").config();
const { connection } = require("./config/db");
const { userRouter } = require("./Routes/user.route");
const { pageRouter } = require("./Routes/page.route");
const { cartRouter } = require("./Routes/cart.route");
const { dressRouter } = require("./Routes/dress.routes");
const { adminRouter } = require("./Routes/admin.route")
const{shippingRouter} =require("./Routes/shippingRoute")
const { shoesRouter } = require("./Routes/shoes.routes");
const { clotingRouter } = require("./Routes/cloting.routes");
const { admin_Details_Router } = require("./Routes/admins_details.route");
const { auth } = require("./middlewere/auth.middleware"); 

const app = express();
app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
  res.status(200).send("Welcome To HomePage");
});


app.use("/users", userRouter);  //this route is for users login and details.
app.use("/pages", pageRouter);
app.use("/carts", cartRouter);
app.use("/address",shippingRouter);
app.use("/dress", dressRouter);
app.use("/shoes", shoesRouter); 
app.use("/cloths", clotingRouter); 
app.use("/admin", adminRouter);
  //this route is for admin site.
  //  app.use(auth)
app.use("/adminsdetails", adminRouter); //this route is for admin login and details.

const PORT = process.env.port || 7700



app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to DataBase");
  } catch (error) {
    console.log("Couldn't connect to DataBase");
  }
  console.log(`Server running on port ${process.env.port}`);
});
