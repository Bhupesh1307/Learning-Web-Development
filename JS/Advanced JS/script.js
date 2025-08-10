async function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(45);
    }, 1000);
  });
}

// IIFE - Imediately Invoked Function
(async function main() {
  let a = await sleep();
  console.log(a);
  let b = await sleep();
  console.log(b);
})();

let [x, y] = [1, 5];
console.log(x, y);

let [a, b, ...rest] = [1, 5, 7, 8, 9, 10];
console.log(a, b, rest);

let obj = {
  p: 1,
  q: 2,
  r: 3,
};

let { p, q } = obj;
console.log(p, q);

// Spread Operator

let arr = [1, 2, 3];

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(...arr));

let OBJ = { ...arr };
console.log(OBJ);
