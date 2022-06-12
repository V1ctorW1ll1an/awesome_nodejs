import { createServer } from "http";

createServer((req, res) => {
    if (req.url === "/") return res.end("<h1> Home page </h1>");
    if (req.url === "/about") return res.end("<h1> About </h1>");
}).listen(5000, () => {
    console.log("Server is running 🌟");
});
