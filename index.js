const package = require("./package.json");
const dbConfig = require("./src/db");

const currentVersion = package.version;
module.exports = { dbConfig, currentVersion };
