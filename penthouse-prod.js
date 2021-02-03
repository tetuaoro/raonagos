const penthouse = require("penthouse");
const fs = require("fs");

penthouse({
  url: "http://www.rao-nagos.pf/",
  css: "./assets/styles/all.css",
}).then((criticalCss) => {
  fs.writeFileSync("./assets/styles/penthouse.css", criticalCss);
});
