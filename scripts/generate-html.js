const showdown = require("showdown");
const argv = require("argv");
const path = require("path");
const glob = require("glob");
const { readFileSync, writeFileSync, mkdirSync, existsSync } = require("fs");

const args = argv
  .option({
    name: "srcdir",
    short: "s",
    type: "string",
    description: "Source directory of files you want transpiled.",
    example: "--srcdir './src'",
  })
  .option({
    name: "outdir",
    short: "o",
    type: "string",
    description: "Output directory for transpiled files.",
    example: "--outdir './dist/html'",
  })
  .run();

const converter = new showdown.Converter();

if (!existsSync(args.options.outdir)) {
  mkdirSync(args.options.outdir);
}

glob(
  `${args.options.srcdir}/**/*.md`,
  {
    ignore: "node_modules/**/*",
  },
  function (err, files) {
    if (err) throw err;

    files.forEach((file) => {
      const text = readFileSync(file, { encoding: "utf-8" });
      const html = converter.makeHtml(text);
      const relPath = path.basename(
        path.relative(args.options.srcdir, file),
        ".md"
      );
      const outputPath = path.resolve(
        args.options.outdir,
        path.join(relPath + ".html")
      );
      writeFileSync(outputPath, html);
    });
  }
);
