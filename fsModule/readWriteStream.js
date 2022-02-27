const fs = require("fs");
const path = require("path");
require("../errorHandler");
const file = path.join(__dirname, "..", "files", "chunk.txt");

const readStream = fs.createReadStream(file, { encoding: "utf-8" });
const writeStream = fs.createWriteStream(
  path.join(__dirname, "..", "files", "streamReaded.txt")
);

// readStream.on("data", (data) => {
//   // when readStream read a chunk of data it emit the data event
//   writeStream.write(data);
// });

// the code above is equivalent to :
readStream.pipe(writeStream);
