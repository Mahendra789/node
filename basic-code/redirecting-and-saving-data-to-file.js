
const http = require('http');
const fs = require('fs');

const server = http.createServer( (req,res) => {

    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<body><h1>Enter message</h1></body>');
        res.write('<form action="/message" method="POST"> <input type="test" name="name"/> <button type="submit">Submit</button> </form>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/message' && method === 'POST'){
        const body = [];

        req.on('data', (chunk)=>{
            console.log(chunk)
            body.push(chunk);

        });
        req.on('end', ()=>{
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split("=")[1];
            fs.writeFileSync('message.txt', message);

        })
        res.writeHead(302, {Location: '/'})

        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body><h1>Node JS page from server</h1></body>');
    res.write('</html>');
    res.end();

});

server.listen(3000);
