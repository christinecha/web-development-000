const SECTION_00 = require("./00");
const SECTION_01 = require("./01");

module.exports = [
  {
    id: 0,
    permaId: "web-dev-0",
    title: "Introduction to Web Development",
    description:
      "This guide is intended to help you get started in your web development journey.",
    contents: [
      {
        id: 0,
        permaId: "intro-to-html",
        title: "Introduction to HTML",
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
        title: "Introduction to CSS",
        description: "",
        contents: [SECTION_01.INTRO_STYLES],
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
