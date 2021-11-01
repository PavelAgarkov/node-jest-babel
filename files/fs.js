import fs from "files/fs";
import path from "path";

import {fileURLToPath} from 'url';

let __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

fs.readFile(
    path.join(__dirname, './package.json'),
    (err, content) => {
        if (err) {
            return null;
        }

        console.log(content.toString());
    });