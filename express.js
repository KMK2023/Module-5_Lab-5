//Extend your calculator.html so that it allows the user to access all 4 server-side calculator routes from Exercise 2 (Add, Multiply, Divide, Subtract) via a basic calculator interface.

const express = require("express"); //Standard to import the express
const app = express(); // create an instance of express

const simpleRouter = require("./Routes/simpleRoutes"); // import the routes from the simpleRoutes.js file
const complexRouter = require("./Routes/complexRoutes"); // import the routes from the complexRoutes.js file

// const calculatorControlls = require('./Controllers/calculatorController');

app.use(express.static("public")); //  first enters here

// request logger
app.use((req,res,next)=>{
    console.log(req.method, " - ",req.path);
    next();
})

app.use("/simple", simpleRouter);
app.use("/complex", complexRouter);

// app.use("/controller", calculatorController);


app.get("/", (req, res) => {
  console.log("someone made a get request on'/'");
  // res.send("Welcome to the calculator!");});//
  res.sendFile(__dirname + "/public/Calculator.html");
});
//required handlers

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
