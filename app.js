const http = require('http')
const fs = require('fs');
const port = 5000;

const server = http.createServer((req, res)=>{
    
    res.setHeader("Content-Type", "text/html")

    const url = req.url;
    if(url === '/home'){
        fs.readFile('./index.html',(err,data)=>{
            if(err){
                res.writeHead(404);
                res.write('Error: File not found')
            }else{
                res.write(data);
            }
        })
    }else if(url === '/contact'){
        res.write("halo")
        res.end();
    }else{
        res.write("error bro gk ada disini")
        res.end();
    }
})


server.listen(3000)
