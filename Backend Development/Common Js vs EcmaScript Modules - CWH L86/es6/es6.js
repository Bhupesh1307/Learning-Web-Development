import http from "http";

// Importing my own modules
import {a, b, c} from "./mymodules.js";
console.log(a, b, c);

import obj from "./mymodules.js";
console.log(obj);

import anything from "./mymodules.js";
console.log(anything); 

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>This is ES6 Syntax</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
