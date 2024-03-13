const http = require('http');
const fs = require('fs');

http.createServer((req, res)=>{

  function handleFileRequest(){
    fs.readFile(__filename, {encoding: 'utf-8'}, (error, contents)=>{
      if (error){
        console.error(error);
        return res.end();
      }
      console.log(`sending response for ${req.url}`);
      res.end(contents);
    })
  }

  if (req.url === '/favicon.ico'){
    return res.end()
  }

  console.log(`incoming request to ${req.url}`);

  res.writeHead(200, {"Content-Type": 'text/plain'});

  setTimeout(()=>{handleFileRequest()}, 5000);


}).listen(1337, "127.0.0.1");

console.log('server running at http://127.0.0.1:1337')