const express=require("express");
const app = express();
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const e = require("express");
const port=3000;
app.use(cookieParser())
app.set('view engine', 'views')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/', (req, res) =>{
    
    res.render('quiz.ejs')
   
})
app.post('/post',(req,res)=>{
let answer=req.body.value;
console.log(answer)
})

app.listen(port,()=>{
    console.log("listening on port no 3000 ")
})