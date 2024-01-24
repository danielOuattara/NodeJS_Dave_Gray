// 1- NodeJS runs on the server or anywhere but on the browser

// 2- the console on the terminal window
console.log("Hello");

// 3- global object instead of the window object
console.log("global = ", global);

console.log("----------------------------------------------------------------");

console.log("module = ", module);

console.log("----------------------------------------------------------------");

// 4- has common core modules instead of ES6 modules
const os = require("node:os");
console.log("os = ", os);

console.log("----------------------------------------------------------------");

console.log(__dirname);
console.log(__filename);

console.log("----------------------------------------------------------------");

const path = require("path");

console.log("path = ", path);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));

console.log("----------------------------------------------------------------");
//5 - user custom module

const math = require("./math");

const sum1 = math.add(6, 9);
console.log("add1 = ", sum1);
console.log("sub1 = ", math.subtract(6, 9));
console.log("multi1 = ", math.multiply(6, 9));
console.log("div1 = ", math.divide(6, 9));

// OR using destructuring
console.log("--------");

const { add, subtract, multiply, divide } = require("./math");

console.log("add2 = ", add(6, 9));
console.log("sub2 = ", subtract(6, 9));
console.log("multi2 = ", multiply(6, 9));
console.log("div2 = ", divide(6, 9));

console.log("----------------------------------------------------------------");

const fetcher = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
};

const response1 = fetcher();
console.log("response1 = ", response1);

console.log("----------------------------------------------------------------");

const data = fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    return data;
  });

console.log("data = ", data);

// const fetcher = require("./fetcher");
// const data = fetcher();
