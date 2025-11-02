// Importing Modules
const fs = require("fs")
const path = require("path")

// Reading Files
const files = fs.readdirSync(path.join(__dirname, "Files"))

// Declaring the Base Folder (Files)
const basePath = path.join(__dirname, "Files")

// Checking if the ext folder exists for the files insede the Files folder, if they do moving the files from Files folder to their ext folder
files.forEach((file) => {
    let ext = path.join((basePath), path.extname(file))
    let oldPath = path.join(basePath, file)
    let newPath = path.join(ext, file)
    if (fs.existsSync(path.join(basePath, path.extname(file)))) {
        fs.renameSync(oldPath, newPath)
    } else {
        fs.mkdirSync(ext)
        fs.renameSync(oldPath, newPath)
    }
})