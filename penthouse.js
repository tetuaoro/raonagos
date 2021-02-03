const penthouse = require("penthouse");
const fs = require("fs");

penthouse({
  url: "https://localhost:8000",
  css: "./assets/styles/all.css",
}).then((criticalCss) => {
  fs.writeFileSync("./assets/styles/penthouse.css", criticalCss);
});
