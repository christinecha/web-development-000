const path = require("path");
const SECTION_00 = require("./00");
const SECTION_01 = require("./01");
const SECTION_02 = require("./02");

module.exports = [
  {
    id: "a",
    permaId: "introduction",
    title: "About",
    markdown: path.resolve(__dirname, "introduction.md"),
    dependencies: [],
  },
  {
    id: 0,
    permaId: "web-dev-0",
    title: "Intro to Web Development",
    description:
      "This guide is intended to help you get started in your web development journey.",
    dependencies: [],
    contents: [
      {
        id: 0,
        permaId: "intro-to-html",
        title: "Intro to HTML",
        description: "",
        contents: [
          SECTION_00.FIRST_WEBSITE,
          SECTION_00.HTML_ELEMENTS,
          SECTION_00.HTML_ATTRIBUTES,
        ],
      },
      {
        id: 1,
        permaId: "intro-to-css",
        title: "Intro to CSS",
        wip: true,
        description: "",
        contents: [SECTION_01.INTRO_STYLES, SECTION_01.COLOR_BASICS],
      },
      {
        id: 2,
        permaId: "dev-tool-basics",
        title: "Intro to Development Tools",
        description: "",
        contents: [SECTION_02.TEXT_EDITOR_BASICS],
      },
      // {
      //   id: 2,
      //   title: "Introduction to Dev Tools",
      //   description: "",
      //   sections: [SECTION_10.INTRO_STYLES],
      // },
      // {
      //   id: 3,
      //   title: "Introduction to JavaScript",
      //   description: "",
      //   sections: [SECTION_10.INTRO_STYLES],
      // },
    ],
  },
];
