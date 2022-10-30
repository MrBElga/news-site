const { appendFile } = require('fs');
const http = require('http');
const { listenerCount } = require('process');



const server = nphttp.createServer((req,res)=>{
    res.end("<html><body>portal de noticias</body></html>");
});

server.listen(3000);
