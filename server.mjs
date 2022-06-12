import { createServer } from "http";
import fs, { readvSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);

createServer((req, res) => {
    const file = req.url === "/" ? "index.html" : req.url;
    const filePath = path.join(dirName, "public", file);
    const extName = path.extname(filePath);

    const allowedFileTypes = [".html", ".css", ".js"];
    const allowed = allowedFileTypes.find((item) => item === extName);

    if (!allowed) return;
    fs.readFile(filePath, (error, content) => {
        if (error) throw error;
        res.end(content);
    });
}).listen(5000, () => {
    console.log("Server is running 🌟");
});
