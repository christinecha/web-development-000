const path = require("path");

const FIRST_WEBSITE = {
  permaId: "first-website",
  title: "Your First Website",
  description: "",
  markdown: path.resolve(__dirname, "your-first-website.md"),
  dependencies: [],
};

const HTML_ELEMENTS = {
  permaId: "intro-to-html-elements",
  title: "Introduction to HTML",
  description: "",
  markdown: path.resolve(__dirname, "intro-to-html.md"),
  dependencies: [FIRST_WEBSITE],
};

module.exports = {
  FIRST_WEBSITE,
  HTML_ELEMENTS,
};
