const path = require("path");

const SCRIPT_TAGS = {
  title: "Script tags",
  description: "",
  filepath: path.resolve(__dirname, "script-tags.md"),
  dependencies: [],
  wip: true,
};

const VARIABLES_FUNCTIONS = {
  title: "Variables and functions",
  description: "",
  filepath: path.resolve(__dirname, "variables-and-functions.md"),
  dependencies: [],
  wip: true,
};

module.exports = {
  SCRIPT_TAGS,
  VARIABLES_FUNCTIONS,
};
