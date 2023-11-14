// Defining a simple route file to be loinked to the main file

const { Router } = require("express"); //can also write as express.Router or {Router};
const router = Router();

const {add} = require("../controllers/calculatorController")

router.get("/add", add);

router.get("/subtract", (req, res) => {
  // Simple subtraction
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  res.send({ result: num1 - num2 });
});

module.exports = router;
