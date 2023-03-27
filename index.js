const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.post('/add',(req,res)=>{
    try{
        let {num1,num2}=req.body;
        res.json({ 
            status: "success",
            message: "the sum of given two numbers", 
            sum: num1+num2 }
    )}
    catch{
        res.json({
            status:'Failure'
        })
    }
})

app.post('/sub',(req,res)=>{
    try{
        let {num1,num2}=req.body;
        res.json({ 
            status: "success",
            message: "the difference of given two numbers", 
            difference: num1-num2 }
    )}
    catch{
        res.json({
            status:'Failure'
        })
    }
})

app.post('/multiply',(req,res)=>{
    try{
        let {num1,num2}=req.body;
        res.json({ 
            status: "success",
            message: "the product of given two numbers", 
            result: num1*num2 }
    )}
    catch{
        res.json({
            status:'Failure'
        })
    }
})

app.post('/divide',(req,res)=>{
    try{
        let {num1,num2}=req.body;
        if(num1===0 || num2===0)
        {
            res.send('Cannot divide by zero')
        }
        else{
            res.json({ 
                status: "success",
                message: "the division of given two numbers", 
                result: num1/num2 })
        }
       
    }
    catch{
        res.json({
            status:'Failure'
        })
    }
})


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;