
const http = require('http');
const express = require('express');
const app = express();

app.use((req,res,next)=>{ //Here next is function which allow middleware to travel to next middleware
    console.log('aaaa')
  res.send('<h1>Hiii</h1>')
})


const server = http.createServer(app);
server.listen(3000);
