const showdown = require("showdown");
const path = require("path");
const { readFileSync, writeFileSync } = require("fs");
const contents = require("../src/contents.js");

const converter = new showdown.Converter();
const templateHTML = readFileSync(path.resolve(__dirname, "../template.html"), {
  encoding: "utf-8",
});
let html = "";
let outlineHTML = "<ul>";

contents.forEach((topic) => {
  const topicHeading = `${topic.id}: ${topic.title}`;
  html += `
    <hr />
    <h1 id="${topic.id}">${topicHeading}</h1>
    <p>${topic.description}</p>
  `;

  outlineHTML += `
    <li>
      <a href="#${topic.id}">${topicHeading}</a>
    </li>
    <ul>
  `;

  if (!topic.contents) return;
  topic.contents.forEach((subtopic) => {
    const subtopicId = `${topic.id}${subtopic.id}`;
    const subtopicHeading = `${subtopicId}: ${subtopic.title}`;

    html += `
      <hr />
      <h1 id="${subtopicId}">${subtopicHeading}</h1>
      <p>${subtopic.description}</p>
    `;

    outlineHTML += `
      <li>
        <a href="#${subtopicId}">${subtopicHeading}</a>
      </li>
      <ul>
    `;

    if (!subtopic.sections) return;
    subtopic.sections.forEach((section, i) => {
      const markdown = readFileSync(section.filepath, { encoding: "utf-8" });
      const sectionHtml = converter.makeHtml(markdown);
      const sectionId = `${topic.id}${subtopic.id}${i}`;
      const sectionHeading = `${sectionId}: ${section.title}`;

      html += `
        <h2 id=${sectionId}>${sectionHeading}</h2>
        <p>${section.description}</p>
        <br />
        ${sectionHtml}
      `;

      outlineHTML += `
        <li>
          <a href="#${sectionId}">${sectionHeading}</a>
        </li>
      `;
    });
    outlineHTML += "</ul>";
  });

  outlineHTML += "</ul>";
});
outlineHTML += "</ul>";

let fullHtml = templateHTML
  .replace("{{content}}", html)
  .replace("{{outline}}", outlineHTML);

writeFileSync(path.resolve(__dirname, "../public/index.html"), fullHtml);
