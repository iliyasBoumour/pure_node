const fs = require("fs");
const path = require("path");
require("../errorHandler");

fs.readFile("./files/msg.txt", "utf-8", (err, res) => {
  if (err) throw err;
  console.log(res);
});

fs.writeFile(
  path.join(__dirname, "files", "newFile.txt"),
  "weeeee",
  (err, res) => {
    if (err) throw err;
    console.log("created");
    fs.appendFile(
      path.join(__dirname, "files", "newFile.txt"),
      "\nweeeee2",
      (err, res) => {
        if (err) throw err;
        console.log("appended 1");
        fs.appendFile(
          path.join(__dirname, "files", "newFile.txt"),
          "\nweeeee3",
          (err, res) => {
            if (err) throw err;
            console.log("appended 2");
          }
        );
      }
    );
  }
);
