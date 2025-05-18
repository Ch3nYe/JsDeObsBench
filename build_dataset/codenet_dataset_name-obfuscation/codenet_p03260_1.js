var input = require("fs").readFileSync("/dev/stdin", "utf8");
input = input.split(/\s/);

const A = Number(input[0]);
const B = Number(input[1]);

var result = (A === 2 || B === 2) ? "No" : "Yes";

console.log(result);
