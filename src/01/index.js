const path = require("path");
const SECTION_00 = require("../00");

const INTRO_STYLES = {
  permaId: "intro-to-styles",
  title: "Introducing Styles",
  description: "",
  markdown: path.resolve(__dirname, "intro-to-styles.md"),
  dependencies: [SECTION_00.HTML_ATTRIBUTES],
  wip: true,
};

const COLOR_BASICS = {
  permaId: "color-basics",
  title: "Color: The Basics",
  description: "",
  markdown: path.resolve(__dirname, "color.md"),
  dependencies: [INTRO_STYLES],
  wip: true,
};

module.exports = {
  INTRO_STYLES,
  COLOR_BASICS,
};
