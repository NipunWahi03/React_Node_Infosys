const fs = require("fs");
fs.readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  fs.readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;

    fs.writeFile(
      "./content/result-file-async",
      "Here is the result in the write file number 2",
      "utf-8",
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Writing in the file completed");
      }
    );
  });
});
