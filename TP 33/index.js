let http = require("http");

let PORT = 4000;

http.createServer((req, res) => {
if(req.url === "/"){
    res.writeHead(200, "text/html");
    res.write("<h1>home de la web</h1>");
    res.end();
}else if(req.url === "/contactos"){
res.writeHead(404, "text/html");
    res.write("<h1>contactos</h1>");
    res.end();
}else{
    res.writeHead(404, "text/html");
    res.write("<h1>404</h1><div>direccion inexistente</div>");
    res.end();
}
}).listen(PORT)

console.log(`servidor activo en http://localhost:${PORT}`);
console.log(`Uptime: ${new Date().toLocaleDateString("es-AR")}`);