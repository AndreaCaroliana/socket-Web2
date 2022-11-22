const express = require('express')
//const requestIp = require('request-ip')
const path = require('path');
const app = express();
const socketIO = require('socket.io');
const http = require('http');
const morgan = require('morgan');
//const IP = require('ip');


app.use(morgan('dev'));
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, './public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

let io = socketIO(server);





app.listen(port, (err) => {

  if(err) throw new Error(err);
  
  console.log(`Example app listening on port ${port}`)
})




/*
//
app.get('/',function(request, response) {
    var clientIp = requestIp.getClientIp(request);
    console.log(clientIp);
    response.send(clientIp);


    
app.get('/', (req, res) => {
    const ipAddress = IP.address();
    res.send(ipAddress)
})
});*/