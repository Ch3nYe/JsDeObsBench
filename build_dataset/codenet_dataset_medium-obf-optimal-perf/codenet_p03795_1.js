let n = Number(require("fs").readFileSync("/dev/stdin", "utf8"));
console.log(800 * n - 200 * ~~(n / 15));