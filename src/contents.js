const SECTION_00 = require("./00");
const SECTION_10 = require("./10");

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
        contents: [SECTION_00.FIRST_WEBSITE, SECTION_00.HTML_ELEMENTS],
      },
      // {
      //   id: 1,
      //   title: "Introduction to CSS",
      //   description: "",
      //   sections: [SECTION_10.INTRO_STYLES],
      // },
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
