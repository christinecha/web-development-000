const path = require("path");

const FIRST_WEBSITE = {
  permaId: "first-website",
  title: "Your First Website",
  description: "",
  markdown: path.resolve(__dirname, "your-first-website.md"),
  dependencies: [],
};

const HTML_ELEMENTS = {
  permaId: "html-elements-intro",
  title: "HTML Elements",
  description: "",
  markdown: path.resolve(__dirname, "html-elements.md"),
  dependencies: [],
};

const HTML_ATTRIBUTES = {
  permaId: "html-attributes-intro",
  title: "HTML Attributes",
  description: "",
  markdown: path.resolve(__dirname, "html-attributes.md"),
  dependencies: [],
};

module.exports = {
  FIRST_WEBSITE,
  HTML_ELEMENTS,
  HTML_ATTRIBUTES,
};
