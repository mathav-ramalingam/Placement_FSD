var express = require('express')
app = express()
var path = require('path');
const { clearScreenDown } = require('readline');
const PORT = 3001;

app.get('/',(req,res) => {
    res.send("WELCOME")
})

app.get('/js',(req,res) => {
    res.json({server : "welcome" , url:"localhost" , port:3001})
})

app.get('/page1',(req,res) =>
{
    console.log(path.join(__dirname,'/public/index.html'));
    res.sendFile(path.join(__dirname,'/public/index.html'))
})

app.get('/page2',(req,res)=>
{
    res.sendFile(path.join(__dirname,'/public/new.html'))
})



app.listen(PORT,() =>
{
    console.log("server started")
})