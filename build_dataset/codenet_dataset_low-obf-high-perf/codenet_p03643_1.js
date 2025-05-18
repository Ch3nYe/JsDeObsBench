function Main(input) {
  console.log('ABC' + input);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));