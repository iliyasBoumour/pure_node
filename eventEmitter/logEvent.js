const { promises: fs } = require("fs");
const path = require("path");
require("../errorHandler");

module.exports = async (log) => {
  try {
    await fs.appendFile(
      path.join(__dirname, "logs.txt"),
      `${new Date()} \t ${log}\n`
    );
  } catch (error) {
    throw error;
  }
};
