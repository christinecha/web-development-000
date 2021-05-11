const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

exec("yarn run build");

fs.watch(
  path.resolve(__dirname, "../src"),
  { recursive: true },
  (curr, prev) => {
    exec("yarn run build", (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }

      console.log(`Rebuilding...`);
    });
  }
);
