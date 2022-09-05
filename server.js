const express=require('express');
const app = express();
const ejs = require('ejs')
const bodyParser=require('body-parser');
const axios=require('axios')
const port=5000;

app.set('view engine', 'views');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.render('index.ejs')
})
app.post('/cityName',async(req,res)=>{
    let cityName=req.body.name
   if(cityName>0 && cityName=="undefined"){
    res.render('*')
   }else{
     
    let api=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=51669da34bea271d0bac117c95300d95`
   console.log(api)
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=51669da34bea271d0bac117c95300d95`)
  .then((response) => {
    let result= response.data
    console.log(result)
    console.log(result.weather)
    res.render('main.ejs',{data:result})
  }).catch(err => {if(err) throw err})
  
   }
    
   
 
})
app.get('*',(req,res)=>{
    res.send("<h1>Page Not Found</h1>")
})

app.listen(port,(err, data) => {
    if(err){console.log(err.info)}
    console.log(`Server is running on ${port}`)
})