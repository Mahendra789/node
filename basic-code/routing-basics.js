const http = require('http');

const server = http.createServer( (req,res) => {

    const url = req.url
    if(url === '/'){
        res.write('<html>');
        res.write('<body><h1>Enter message</h1></body>');
        res.write('<form action="/message" method="POST"> <input type="test" name="name"/> <button type="submit">Submit</button> </form>');
        res.write('</html>');
        return res.end();
    }


    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body><h1>Node JS page from server</h1></body>');
    res.write('</html>');
    res.end();


});

server.listen(3000);