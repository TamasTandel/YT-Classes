import http from 'http';
import fs from 'fs';

const port = process.env.PORT || 3000;
const server =  http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')
    console.log(req.url);

    if(req.url == '/'){
        res.statusCode = 200;
        res.end('<h1>hey this is tamas</h1><p>hey this is the way to rock the world</p>');
    }
    else if(req.url == '/class1'){
        req.statusCode = 200;
        const data = fs.readFileSync('cl1.html');
        res.end(data.toString());
    }

})

server.listen(port,()=>{
    console.log(`server is listning on port ${port}`);
});