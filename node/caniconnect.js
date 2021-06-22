const http = require('http');
const logger = require('morgan');
const cors = require('cors');
const express = require('express');
const spawn = require('child_process').spawn;
const path = require('path');

const port = process.env.PORT|| 5000;

const app = express();
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     credentials: true,
//   })
// );

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.resolve(__dirname,'../react/build')));

app.get('/',(req,res)=>res.end('Check'))

// const server = http.createServer((req, res) => {

//  });

app.post('/baseranker', function(req,res){
  console.log('baseranker reached');
  const pythonProcess = spawn('python',[path.join(__dirname,"/python-scripts/baseranker.py"),JSON.stringify(req.body.base),JSON.stringify(req.body.area)]);
  pythonProcess.stdout.on('data',(data)=>{
    console.log(data.toString());
    res.end(data);
    });
  console.log("Done running?");
});

app.get('/testing',(req,res)=>{
  console.log("Inside testing function");
  const pythonPro = spawn('python',[path.join(__dirname,"/python-scripts/printout.py")]);
  console.log("After spawning");
  pythonPro.stdout.on('data',(data)=>{
    res.end(data)});
});

app.get('/baseranker',(req,res)=>res.end('Check'));

app.listen(port, () => {
  console.log('Server Listening');
});