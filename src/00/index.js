const path = require("path");

const FIRST_WEBSITE = {
  title: "Your First Website",
  description: "",
  filepath: path.resolve(__dirname, "your-first-website.md"),
  dependencies: [],
};

const HTML_ELEMENTS = {
  title: "Introduction to HTML",
  description: "",
  filepath: path.resolve(__dirname, "intro-to-html.md"),
  dependencies: [FIRST_WEBSITE],
};

module.exports = {
  FIRST_WEBSITE,
  HTML_ELEMENTS,
};
