// This is to create a router to handle complex calculations
const {Router} = require("express") //can also write as express.Router or {Router};
const router=Router();


router.get("/power", (req, res) => {
    // Simple subtraction
    const num1= parseInt(req.query.num1);
    const num2= parseInt(req.query.num2);
    res.send("Power returns a value of " + Math.pow(num1, num2)); // Calculation to raise num2 to the power of num1

 });

 module.exports = router;