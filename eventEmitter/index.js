const eventEmitter = require("events");
const logToFile = require("./logEvent");

// logToFile();
class MyEventEmitter extends eventEmitter {}

const myEventEmitter = new MyEventEmitter();

myEventEmitter.on("log", (log) => logToFile(log));

myEventEmitter.emit("log", "iliyas logged in");
