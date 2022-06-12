import { createServer } from "http";

createServer((req, res) => {
    res.write("ola");
    res.end();
}).listen(5000, () => {
    console.log("Server is running 🌟");
});
