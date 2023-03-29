const express = require('express')
const router = express.Router()

router.get('/addition', (req,res) => {
    console.log('add endpoint called');
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    if (isNaN(num1) || isNaN(num2)) {
        return invalidParameter()
  }
  const result = num1 + num2;
  res.json({ result });
})

router.get('/subtraction', (req, res) => {
    console.log("subtraction API called")
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    if(isNaN(num1) || isNaN(num2)){
        return invalidParameter()
    }

    const result = num1 - num2;
    res.json({result});
})

router.get('/multiplication', (req, res) => {
    console.log("multiplication endpoint called!")
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    if(isNaN(num1) || isNaN(num2)){
        return invalidParameter()
    }
    const result = num1 * num2
    res.json({result})

})
router.get('/division', (req, res) => {
    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)
    if(isNaN(num1) || isNaN(num2)){
        return invalidParameter()
    }
    if(num2 == 0){
        return res.status(400).json({error: '!--CANNOT DIVIDE BY ZERO--!'})
    }
    const result = num1/num2
    res.json({result})
})

//Avoid code duplication in the API endpoints, message will be the same except
//for the division api endpoint as there'll need to be an additional message incase
//the user tries to divide by 0.
invalidParameter = () =>{
    console.log("ERROR: OCCURED")
    return res.status(400).json({error:'Invalid input paramter(s): num1 and num2 must be numbers.'})
}

module.exports = router