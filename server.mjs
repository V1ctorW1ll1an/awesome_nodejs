import { createServer } from "http";
import fs, { readvSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);

createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile(
            path.join(dirName, "public", "/index.html"),
            (error, content) => {
                if (error) throw error;
                res.end(content);
            }
        );
    }
}).listen(5000, () => {
    console.log("Server is running 🌟");
});
