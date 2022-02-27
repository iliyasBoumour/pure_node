process.on("uncaughtException", (err) => {
  console.log(`the error is ${err}`);
  process.exit(1);
});
