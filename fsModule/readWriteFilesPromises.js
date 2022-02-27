const fs = require("fs").promises;
const path = require("path");
require("../errorHandler");

createFile = async () => {
  const file = path.join(__dirname, "files", "async.txt");
  await fs.writeFile(file, "statement 1");
  const res = await fs.readFile(file, "utf8");
  console.log(`read result: ${res}`);
  await fs.appendFile(file, "\nstatement 2");
  console.log("append 1");
  await fs.rename(file, path.join(__dirname, "files", "asyncCompleted.txt"));
  //   deletefile
  //   await fs.unlink(file);
};

createFile();
