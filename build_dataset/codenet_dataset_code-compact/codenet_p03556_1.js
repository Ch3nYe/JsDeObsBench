function Main(input) {
  input = input.split("\n");
  var n = parseInt(input[0]);
  var ans =Math.pow(Math.floor(Math.sqrt(n)),2);
  console.log('%s', ans);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));