function Main(s) {
  var s = s.split("\n")[0].split(" ").map(e => parseInt(e, 10)).sort((a, b) => b - a);
  var cnt = 0;
  if ((s[1] - s[2]) % 2 === 0) {
    cnt += s[0] - s[1];
    s[2] += cnt;
    cnt += (s[0] - s[2]) / 2;
  } else {
    s[0]++;
    s[1]++;
    cnt++;
    cnt += s[0] - s[1];
    s[2] += s[0] - s[1];
    cnt += (s[0] - s[2]) / 2;
  }
  console.log(cnt);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));