const http = require('http')
const server = http.createServer((req, res) => { // req : incoming request , res : response
    if (req.url === '/' ) { // === is strict equality
        res.end('Welcome to the homepage')
    }
    else if(req.url === '/about') {
        res.end('Here is our short history')
    } 
    else {res.end( `
    <h1> Oops! </h1>
    <p> We can't seem to find the page you are looking for </p>
    <a href ="/"> Back home</a>`)}

}
)

server.listen(5000) // what port the server is gonna use
