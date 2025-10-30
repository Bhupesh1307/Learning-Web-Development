// const fs = require("fs");

// // Blocking thread code
// console.log("This will write a file and then code will run further")
// fs.writeFileSync("test.txt", "This is an example text")
// console.log("Code after writing that file")

// // Asynchronoues File Writing
// console.log("Wrinting File")
// fs.writeFile("test2.txt", "This text is being written while the code is running", ()=> {
//     console.log("Writting file done")
//     fs.readFile("test2.txt", (error, data) => {
//         console.log(error, data.toString())
//     })
// })
// console.log("File is being written")

// // If we want to add another content into existing file we can do this
// fs.appendFile("test.txt", " Another Text", (error, data) => {
//     fs.readFile("test.txt", (error, data) => {
//         console.log(data.toString())
//     })
// })


import fs from "fs/promises"

let a = await fs.readFile("test.txt")
console.log(a.toString())

let b = await fs.appendFile("test2.txt", "\n\n\nThis is another example text");
console.log(b)