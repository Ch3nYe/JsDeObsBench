function Main(s) {
  var s = s.split("\n");
  var zero = s[0].split(" ").map(e => parseInt(e, 10));
  var t = s.slice(1).map(e => parseInt(e, 10)).sort((a, b) => a - b);
  var cnt = 1;
  var c = zero[1];
  for (var i = 1; i < zero[0]; i++) {
    if (t[i - 1] <= t[i] && t[i] <= t[i - 1] + zero[2]) {
      c--;
      if (c === 0) {
        cnt++;
        c = zero[1];
      }
    } else {
      cnt++;
      c = zero[1];
    }
  }
  console.log(cnt);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));