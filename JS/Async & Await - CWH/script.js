console.log("Loading Modules");

console.log("Loading Data");

// async function loadData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data Loaded Successfully");
//         }, 3000);
//     })
// }

async function loadData() {
  let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await x.json();
  console.log(data);
}

async function postData() {
  let y = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  let data = await y.json();
  return data;
}

async function main() {
  let data = await loadData();

  let pData = await postData();

  console.log(data);

  console.log(pData);

  console.log("Process Data");

  console.log("Task 2");
}

main();
