const fs = require("fs");
const path = require("path");

requestListener = (req, res) => {
  console.log(req.url, req.method);
  let filePath = path.join(
    __dirname,
    "pages",
    req.url === "/" ? "index.html" : req.url
  );

  let extname = path.extname(filePath);
  let contentType = "text/html";

  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
    case ".txt":
      contentType = "text/plain";
      break;
  }

  if (contentType == "text/html" && extname == "") filePath += ".html";
  console.log(filePath);
};
module.exports = requestListener;
