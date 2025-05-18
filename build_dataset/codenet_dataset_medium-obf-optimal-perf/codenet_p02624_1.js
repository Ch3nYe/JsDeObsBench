var fs = require("fs");
var line = fs.readFileSync("/dev/stdin");
var N = Number(line);
var res = 0;

for (var i = 1; i <= N; i++) {
  var n = Math.floor(N / i);
  res += Math.floor((i * n * (n + 1)) / 2);
}

console.log(res);
