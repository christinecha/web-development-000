const path = require("path");
const SECTION_00 = require("../00");
const SECTION_01 = require("../01");

const TEXT_EDITOR_BASICS = {
  permaId: "text-editor-basics",
  title: "Text Editor Basics",
  description: "",
  markdown: path.resolve(__dirname, "text-editor-basics.md"),
  dependencies: [SECTION_00.FIRST_WEBSITE],
};

const INSPECT_ELEMENTS = {
  permaId: "inspect-elements",
  title: "Inspecting Elements",
  description: "",
  markdown: path.resolve(__dirname, "inspect-elements.md"),
  // wip: true,
  dependencies: [SECTION_00.HTML_ATTRIBUTES, SECTION_01.COLOR_BASICS],
};

module.exports = {
  TEXT_EDITOR_BASICS,
  INSPECT_ELEMENTS,
};
