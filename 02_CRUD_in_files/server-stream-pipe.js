const fs = require("node:fs");

const readStream = fs.createReadStream("./streams-pipe/lorem-stream-pipe.txt", {
  encoding: "utf8",
});

const writeStream = fs.createWriteStream(
  "./streams-pipe/new-lorem-stream-pipe.txt",
);

readStream.pipe(writeStream);
