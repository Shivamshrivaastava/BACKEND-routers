// express => server, backend routers
// libraries => morgan, bcrypt, helmet
// process libraries => environment path => port
// get & post => postman
// nodemon => automatic file run based on changes
// project intialize => npm int -y

const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const Port = process.env.PORT ||5000;
const app = express();
app.use(express.json());
app.use(helmet());
app.use(morgan());

// importing loginrouter
const Loginrouter = require('./routers/Loginrouter')
app.use("/test", Loginrouter);

// get request
app.post("/", (req, res,next) => {
  console.log(req.body);
  // res.send("hello shivam");
  res.json({
    message : "hello shivam"
  })
  app.use("*",(req,res)=>{
    res.status(404).send("PAGE NOT FOUND! ")
  })
});
app.listen(Port, () => {
   console.log("port is running on 5000");
});