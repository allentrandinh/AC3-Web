const http = require('http');
const logger = require('morgan');
const cors = require('cors');
const express = require('express');
const spawn = require('child_process').spawn;

const port = process.env.PORT|| 5000;

const app = express();
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(exoress.static(path.resolve(__dirname,'../react/build')));

app.get('/',(req,res)=>res.end('Check'))

// const server = http.createServer((req, res) => {

//  });

app.post('/baseranker', function(req,res){
  const pythonProcess = spawn('python',["./python-scripts/baseranker.py",JSON.stringify(req.body.base),JSON.stringify(req.body.area)]);
  pythonProcess.stdout.on('data',(data)=>{
    console.log(data.toString());
    res.end(data);
    });
});

app.listen(port, () => {
  console.log('Server Listening');
});