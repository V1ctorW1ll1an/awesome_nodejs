import { createServer } from "http";
import { parse } from "url";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);

import data from "./urls.json" assert { type: "json" };

function writeFile(callback) {
    fs.writeFile(
        path.join(dirName, "urls.json"),
        JSON.stringify(data, null, 4),
        (error) => {
            if (error) throw error;
            callback(JSON.stringify({ message: "ok" }));
        }
    );
}

createServer((req, res) => {
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*",
    });
    const { name, url, del } = parse(req.url, true).query;
    if (!name || !url) return res.end(JSON.stringify(data));
    if (del) {
        data.urls = data.urls.filter((dataUrl) => dataUrl.name !== name);
        return writeFile((message) => res.end(message));
    }
    data.urls.push({ name, url });
    return writeFile((message) => res.end(message));
}).listen(3000, () => {
    console.log("Api is running 🌟");
});
