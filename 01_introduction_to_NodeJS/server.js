// 1- NodeJS runs on the server or anywhere but on the browser

console.log(
  "---------------------------------------------------------------- 2",
);

// 2- the console on the terminal window
console.log("Hello");

console.log(
  "---------------------------------------------------------------- 3",
);

// 3- global object instead of the window object
console.log("global = ", global);

console.log("------------------------------------------");

console.log("module = ", module);

console.log("------------------------------------------");

// 4- has common core modules instead of ES6 modules
const os = require("node:os");
console.log("os = ", os);

console.log("os.type() ) = ", os.type());
console.log("os.version() = ", os.version());
console.log("os.homedir() = ", os.homedir());

console.log(
  "---------------------------------------------------------------- 4",
);

console.log("__dirname = ", __dirname);
console.log("__filename = ", __filename);

console.log(
  "----------------------------------------------------------------- 5",
);

const path = require("path");

console.log("path = ", path);

console.log("path.dirname(__filename) = ", path.dirname(__filename));
console.log("path.basename(__filename) = ", path.basename(__filename));
console.log("path.extname(__filename) = ", path.extname(__filename));
console.log("path.parse(__filename) = ", path.parse(__filename));

console.log(
  "----------------------------------------------------------------- 6",
);
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

console.log(
  "----------------------------------------------------------------- 7",
);

const fetcher = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
};

const response1 = fetcher();
console.log("response1 = ", response1);

console.log("---------------------------------------------------------- 8");

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
