use("crudDB")

// db.createCollection("Cources")

// db.Cources.insertOne(
//     {
//         "name": "Harry's Web Dev Free Cource",
//         "price": 0,
//         "assignments": 12,
//         "projects": 45
//     }
// )

// db.Cources.insertMany([
//     {
//     "name": "CodeWithHarry JS Bootcamp",
//     "price": 0,
//     "assignments": 15,
//     "projects": 20
//     },
//     {
//         "name": "FreeCodeCamp Frontend",
//         "price": 0,
//         "assignments": 30,
//         "projects": 10
//     },
//     {
//         "name": "Complete HTML & CSS Guide",
//         "price": 0,
//         "assignments": 18,
//         "projects": 12
//     },
//     {
//         "name": "Backend with Node.js",
//         "price": 0,
//         "assignments": 20,
//         "projects": 25
//     },
//     {
//         "name": "React Crash Course",
//         "price": 0,
//         "assignments": 10,
//         "projects": 8
//     },
//     {
//         "name": "Python for Beginners",
//         "price": 0,
//         "assignments": 25,
//         "projects": 15
//     },
//     {
//         "name": "MongoDB Basics",
//         "price": 0,
//         "assignments": 12,
//         "projects": 5
//     },
//     {
//         "name": "Git & GitHub Mastery",
//         "price": 0,
//         "assignments": 8,
//         "projects": 4
//     },
//     {
//         "name": "Linux Essentials Course",
//         "price": 0,
//         "assignments": 14,
//         "projects": 7
//     },
//     {
//         "name": "Full MERN Stack Roadmap",
//         "price": 0,
//         "assignments": 35,
//         "projects": 30
//     }
// ])

// // Read
// let a = db.Cources.find({"price": 0})
// console.log(a.count())
// console.log(a.toArray())

// let b = db.Cources.findOne({"price": 0})
// console.log(b)

// Update
db.Cources.updateOne({"price": 0}, {$set:{"price": 100}})
console.log(db.Cources.findOne({"price": 100}))

db.Cources.updateMany({"price": 0}, {$set:{"price": 1000}})
console.log(db.Cources.find({"price": 1000}))

// Delete
db.Cources.deleteOne({"price": 1000})
db.Cources.deleteMany({"name": "Linux Essentials Course"})
