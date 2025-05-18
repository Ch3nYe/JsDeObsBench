function Main(input) {
  input = input.trim()
//  input = input.split(" ").map(Number);
console.log(24+(24-input))
}Main(require("fs").readFileSync("/dev/stdin", "utf8"));