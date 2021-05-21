const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
res.setHeader("Content-Type", "application/json");
res.writeHead(200);
res.end(`{
    "JSON": "Devolvemos en formato JSON",
    "Detalle": [{
        "Nombre": "Julissa Huaman Hilari",
        "Descripción": "Fullstack <3",
        "Promoción": "LIM014",
        "squad": "https://drive.google.com/file/d/1StrQMJTMkJJ8hH1JiFI0ACWCA73YuSqd/view?usp=sharing"
    }]
}`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

module.exports = {
    requestListener,
    server
};