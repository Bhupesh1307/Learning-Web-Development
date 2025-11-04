use("Cources");

db.getCollection("sigma").insertMany([
    {
        "name": "Python",
        "price": 20000
    },
    {
        "name": "Java",
        "price": 18000
    },
    {
        "name": "C++",
        "price": 180000
    },
    {
        "name": "JavaScript",
        "price": 20000
    }
])

console.log("Data Insert Complete")