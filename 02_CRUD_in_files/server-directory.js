const fs = require("node:fs");
const path = require("node:path");

// console.log("process = ,", process);

const content =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus tempore. \n";

//-------------------------------------------------------------------

// create directory

if (!fs.existsSync("./new-directory")) {
  fs.mkdir(
    path.resolve(process.cwd(), "new-directory"),
    //   { recursive: true },
    (err) => {
      if (err) {
        throw new Error("Something went wrong");
      }
      console.log("new-directory created");
    },
  );
}

if (fs.existsSync("./new-directory")) {
  console.log("/new-directory exists in the root folder");
}

if (fs.existsSync("./new-directory")) {
  fs.rmdir(path.resolve(process.cwd(), "new-directory"), (err) => {
    if (err) {
      throw new Error("Something went wrong");
    }
    console.log("new-directory deleted");
  });
}
