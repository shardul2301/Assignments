// java script server 
const { write } = require('fs');
const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('hi welcome spiderman');
        res.end();
    }
    if(req.url === '/api/arr'){
        res.write(JSON.stringify([1,3,46,67]));
        res.end();
    }
});
server.listen(3000);
console.log('listen on the  port  3000');
let i =0 ;
server.on('connection',()=>{
    i++;
    console.log(`connection is done number is : ${i}`);
    
})
server.listen(3000);
console.log('listen on the  port  3000');

const http = require('node:http');

const server = http.createServer({ keepAliveTimeout: 60000 }, (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!',
  }));
});

server.listen(3000);
// Close the server after 10 seconds
setTimeout(() => {
  server.close(() => {
    console.log('server on port 8000 closed successfully');
  });
}, 10000);
