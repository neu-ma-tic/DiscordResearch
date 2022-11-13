const express = require('express');
const server = express();

server.all('/',(req,res)=>{
  res.sendFile(__dirname+'/index.html')
});


server.get('/cmd',(req,res)=>{
    res.sendFile(__dirname+'/cmd.html')    
})

server.get('/cmd/money',(req,res)=>{
    res.sendFile(__dirname+'/money.html')    
})



function keepAlive(){
  server.listen(3000,()=>{
  console.log("봇 서버 준비됨")
  })
}
module.exports = keepAlive;