const fs = require("node:fs");
const path = require("node:path");

// console.log("process = ,", process);

const content =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus tempore. \n";

//-------------------------------------------------------------------

// create directory
fs.mkdir(
  path.resolve(process.cwd(), "files-callbacks"),
  { recursive: true },
  (err) => {
    if (err) throw new Error("Something went wrong");
  },
);

//---
// create file
fs.appendFile("lorem.txt", content, function (err) {
  if (err) throw err;
  console.log("Saved!");
});

fs.open("lorem2.txt", "w", function (err) {
  if (err) throw err;
  console.log("lorem2 opened!");
});

fs.readFile("./lorem.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// fs.readFile("./no-file", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

console.log("Ready for async message ? ");

//--------------------------------------------------------------------

fs.appendFile(
  path.join(process.cwd(), "files-callbacks", "doc1.txt"),
  content,
  (err) => {
    if (err) throw err;
    console.log("doc1.txt : OK");
  },
);

fs.open(
  path.join(__dirname, "files-callbacks", "doc2.txt"),
  "w",
  (err, file) => {
    if (err) throw err;
    console.log("doc2.txt : OK");
  },
);

fs.writeFile(
  path.join(__dirname, "files-callbacks", "doc3.txt"),
  content,
  (err) => {
    if (err) throw err;
    console.log("doc3.txt : OK");
  },
);

//---

fs.readFile(
  path.join(__dirname, "files-callbacks", "doc1.txt"),
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log("data_1 = ", data);
  },
);

fs.readFile(
  path.join(__dirname, "files-callbacks", "doc2.txt"),
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log("data_2 = ", data);
  },
);

fs.readFile(
  path.join(__dirname, "files-callbacks", "doc3.txt"),
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log("data_3 = ", data);
  },
);

// call back hell
fs.writeFile(
  path.join(__dirname, "files-callbacks", "doc4.txt"),
  content,
  (err) => {
    if (err) throw err;
    console.log("doc4.txt : initial OK");

    fs.appendFile(
      path.join(__dirname, "files-callbacks", "doc4.txt"),
      content,
      (err) => {
        if (err) throw err;
        console.log("doc4.txt : append 1 OK");

        fs.appendFile(
          path.join(__dirname, "files-callbacks", "doc4.txt"),
          content,
          (err) => {
            if (err) throw err;
            console.log("doc4.txt : append 2 OK");

            fs.appendFile(
              path.join(__dirname, "files-callbacks", "doc4.txt"),
              content,
              (err) => {
                if (err) throw err;
                console.log("doc4.txt : append 3 OK");
                fs.copyFile(
                  path.join(__dirname, "files-callbacks", "doc4.txt"),
                  path.join(__dirname, "files-callbacks", "doc4-copy.txt"),
                  (err) => {
                    if (err) throw err;
                    console.log("doc4.txt copy to doc4-copy.txt ");
                  },
                );

                fs.rename(
                  path.join(__dirname, "files-callbacks", "doc4.txt"),
                  path.join(__dirname, "files-callbacks", "doc5.txt"),
                  (err) => {
                    if (err) throw err;
                    console.log("doc4.txt renamed to doc5.txt ");
                  },
                );
              },
            );
          },
        );
      },
    );
  },
);

// promise

//--------------------------------------------------------------------

// delete file

fs.unlink("lorem2.txt", function (err) {
  if (err) throw err;
  console.log("File deleted!");
});
//--------------------------------------------------------------------
// exit on uncaught errors
process.on("uncaughtException", (err) => {
  console.log(`There was an error: ${err}`);
  process.exit(1);
});
