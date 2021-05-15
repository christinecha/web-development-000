const path = require("path");
const SECTION_00 = require("../00");

const TEXT_EDITOR_BASICS = {
  permaId: "text-editor-basics",
  title: "Text Editor Basics",
  description: "",
  markdown: path.resolve(__dirname, "text-editor-basics.md"),
  dependencies: [SECTION_00.FIRST_WEBSITE],
};

module.exports = {
  TEXT_EDITOR_BASICS,
};
