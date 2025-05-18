let [a, b] = require("fs").readFileSync("/dev/stdin", "utf8").split(" ").map(Number);
if (a == 1) a = 14;
if (b == 1) b = 14;
console.log(a == b ? "Draw" : a > b ? "Alice" : "Bob");