const path = require("path");

const FIRST_WEBSITE = {
  permaId: "what-is-a-website",
  title: "What is a Website?",
  description: "",
  markdown: path.resolve(__dirname, "what-is-a-website.md"),
  dependencies: [],
};

const HTML_ELEMENTS = {
  permaId: "html-elements-intro",
  title: "HTML Elements",
  description: "",
  markdown: path.resolve(__dirname, "html-elements.md"),
  wip: true,
};

const HTML_ATTRIBUTES = {
  permaId: "html-attributes-intro",
  title: "HTML Attributes",
  description: "",
  markdown: path.resolve(__dirname, "html-attributes.md"),
  wip: true,
};

module.exports = {
  FIRST_WEBSITE,
  HTML_ELEMENTS,
  HTML_ATTRIBUTES,
};
