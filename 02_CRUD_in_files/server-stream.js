const fs = require("node:fs");

const readStream = fs.createReadStream("./streams/lorem-stream.txt", {
  encoding: "utf8",
});

const writeStream = fs.createWriteStream("./streams/new-lorem-stream.txt");

readStream.on("data", (chunk) => {
  console.log(chunk);
  writeStream.write(chunk);
});
