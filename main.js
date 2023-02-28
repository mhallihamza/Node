let http = require('http');
let fs = require('fs');
fs.writeFile('welcome.txt', 'Hello Node', function (err) {
  if (err) console.error("error");
  console.log('File created successfully!');
});
fs.readFile('welcome.txt', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});
http.createServer((request,response)=>{
   response.writeHead(200);
   response.end('<h1>Hello Node!!!!</h1>\n')
}).listen(3000,()=>{
    console.log("Server running in port 3000")
});