function Main(input) {
  console.log( (input || "").split(/\s+/).map(function(entry) {
    return entry[0].toUpperCase();
  }).join(""));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));