var express = require('express')
app = express()

const PORT = 3001;

app.get('/',(req,res) => {
    res.send("WELCOME")
})

app.get('/js',(req,res) => {
    res.json({server : "welcome" , url:"localhost" , port:3001})
})

app.get('/static',(req,res) =>
{
    res.sendFile('D:/WORKSPACE/placement_FSD/Backend/public/index.html')
})

app.get('/page',(req,res)=>
{
    res.sendFile('D:/WORKSPACE/placement_FSD/Backend/public/new.html')
})




app.listen(PORT,() =>
{
    console.log("server started")
})