const path = require("path");

const SCRIPT_TAGS = {
  title: "Script tags",
  description: "",
  filepath: path.resolve(__dirname, "script-tags.md"),
  dependencies: [],
};

const VARIABLES_FUNCTIONS = {
  title: "Variables and functions",
  description: "",
  filepath: path.resolve(__dirname, "variables-and-functions.md"),
  dependencies: [],
};

module.exports = {
  SCRIPT_TAGS,
  VARIABLES_FUNCTIONS,
};
