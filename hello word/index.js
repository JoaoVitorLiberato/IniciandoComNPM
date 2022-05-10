const http = require("http");

const port = 3000;
const host = "localhost";

const server = http.createServer( (request, response)  => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Olá mundo!!");
});

server.listen( port, host, () => {
    console.log("O servidor está Rondando");
})