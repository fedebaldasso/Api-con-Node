import http from "http";

const server = http.createServer(async (req, res) => {
    if (req.url ==="/" &&req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify({ message: "Hola Nucber!!" }));
        res.end();
        return;
    }
    res.writeHead(404, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ message: "Ups!! Nada!!" }));
    res.end();
    return;
});

const PORT = 4000;

server.listen(PORT, () => {
    console.log(`Servidor corriendo: http://localhost:${PORT}`);
});