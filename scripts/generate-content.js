const showdown = require("showdown");
const path = require("path");
const { readFileSync, writeFileSync } = require("fs");
const allContents = require("../src/contents.js");

const converter = new showdown.Converter();
const templateHTML = readFileSync(path.resolve(__dirname, "../template.html"), {
  encoding: "utf-8",
});

const injectTemplate = ({ content, outline, filepath }) => {
  let injected = templateHTML
    .replace("{{content}}", content)
    .replace("{{outline}}", outline);

  writeFileSync(filepath, injected);
  console.log("File generated:", filepath);
};

const generateOutline = ({ parentId = "", contents = [] }) => {
  let html = "";

  if (!contents.length) {
    return html;
  }

  html += "<ul>";
  contents.forEach((c, index) => {
    const id = parentId + (c.id || index);

    html += `
      <li>
        <a href="./${c.permaId}.html">${id}: ${c.title}</a>
      </li>
    `;

    html += generateOutline({
      parentId: id,
      contents: c.contents,
    });
  });

  html += "</ul>";
  return html;
};

const generatePages = ({ parentId = "", contents = [] }) => {
  const allPages = [];

  if (!contents.length) {
    return allPages;
  }

  contents.forEach((c, index) => {
    const id = parentId + (c.id || index);
    const markdown = c.markdown
      ? readFileSync(c.markdown, { encoding: "utf-8" })
      : "";
    const markdownHtml = converter.makeHtml(markdown);

    let html = `
      <h1 id="${id}">${c.title}</h1>
      <p>${c.description}</p>
      ${markdownHtml}
    `;

    const pages = generatePages({
      parentId: id,
      contents: c.contents,
    });

    const filepath = path.resolve(__dirname, `../public/${c.permaId}.html`);

    pages.forEach((page) => {
      html += page.content;
      allPages.push(page);
    });

    allPages.push({
      content: html,
      filepath,
    });
  });

  return allPages;
};

const outline = generateOutline({ contents: allContents });
const pages = generatePages({ contents: allContents });
pages.forEach((page) => {
  injectTemplate({ ...page, outline });
});

const allHtml = pages.reduce((html, page) => html + page.content, "");
injectTemplate({
  content: allHtml,
  outline,
  filepath: path.resolve(__dirname, `../public/index.html`),
});
