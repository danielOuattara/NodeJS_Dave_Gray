const fs = require("node:fs/promises");
const path = require("node:path");
// console.log("process = ,", process);

const content =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus tempore. \n";

// ---------- create directory

async function creatingDir() {
  try {
    await fs.mkdir(path.resolve(process.cwd(), "files-promises"), {
      recursive: true,
    });
    console.log("files-promises directory created! ");
  } catch (error) {
    console.log(error);
  }
}

creatingDir();

//------------ create files

async function creatingFiles() {
  try {
    await fs.appendFile("lorem-promises.txt", content);
    console.log("created: lorem-promises.txt");

    await fs.open("lorem2-promises.txt", "w");
    console.log("created: lorem2-promises.txt");
  } catch (error) {
    console.log(error);
  }
}

creatingFiles();

//--------- readFile not found file

async function readingFileNotFound() {
  try {
    const data = await fs.readFile("./no-file", "utf8");
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

// readingFileNotFound();

//--------------------------

async function creatingFiles2() {
  try {
    await fs.appendFile(
      path.join(process.cwd(), "files-promises", "doc1.txt"),
      content,
    );

    await fs.open(path.join(__dirname, "files-promises", "doc2.txt"), "w");

    await fs.writeFile(
      path.join(__dirname, "files-promises", "doc3.txt"),
      content,
    );
  } catch (error) {
    console.log(error);
  }
}

creatingFiles2();

//--------- readFile file

async function readingFiles() {
  try {
    const data1 = await fs.readFile(
      path.join(__dirname, "files-promises", "doc1.txt"),
      "utf8",
    );
    console.log("data_1 = ", data1);

    const data2 = await fs.readFile(
      path.join(__dirname, "files-promises", "doc2.txt"),
      "utf8",
    );
    console.log("data_2 = ", data2);

    const data3 = await fs.readFile(
      path.join(__dirname, "files-promises", "doc3.txt"),
      "utf8",
    );
    console.log("data_3 = ", data3);
  } catch (error) {
    console.log(error.message);
  }
}

readingFiles();

//------------  exit on uncaught errors
process.on("uncaughtException", (err) => {
  console.log(`There was an error: ${err}`);
  process.exit(1);
});

// chaining operations with promises

async function chainingPromises() {
  const dirName = "files-promises";
  const fileName = "doc4.txt";

  await fs.writeFile(path.join(__dirname, dirName, fileName), content);
  console.log(`${fileName} : initial OK`);

  await fs.appendFile(path.join(__dirname, dirName, fileName), content);
  console.log(`${fileName} : append 1 OK`);

  await fs.appendFile(path.join(__dirname, dirName, fileName), content);
  console.log(`${fileName} : append 2 OK`);

  await fs.appendFile(path.join(__dirname, dirName, fileName), content);
  console.log(`${fileName} : append 3 OK`);

  await fs.copyFile(
    path.join(__dirname, dirName, fileName),
    path.join(__dirname, dirName, "doc4-copy.txt"),
  );
  console.log("doc4.txt copy to doc4-copy.txt ");

  await fs.rename(
    path.join(__dirname, dirName, fileName),
    path.join(__dirname, dirName, "doc5.txt"),
  );
  console.log("doc4.txt renamed to doc5.txt ");
}

chainingPromises();

//----------- deleting file

async function deletingFile() {
  try {
    await fs.unlink(path.join(__dirname, "files-promises", "doc5.txt"));
    console.log("doc5.txt DELETED !");
  } catch (error) {
    console.log(error.message);
  }
}

deletingFile();
