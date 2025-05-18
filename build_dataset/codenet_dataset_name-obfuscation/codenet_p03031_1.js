function Main(input) {
  lines = input.split("\n")
  lines = input.split("\n")
  n = lines[0].split(" ")[0] * 1
  m = lines[0].split(" ")[1] * 1
  ps = lines[lines.length - 1].split(" ")
  lines = lines.slice(1, -1).map(function(l) { return l.split(' ').slice(1) })
  ans = 0
  for (i = 0; i < (1 << n);i++) {
    s = ("0000000000" + i.toString(2)).slice(-1 * n)
    flg = true
    for(j = 0; j < lines.length; j++) {
      on = 0
      if (!flg) break;
      for(k = 0; k < lines[j].length; k++) {
        on += s[n - lines[j][k]] * 1
      }
      if (on % 2 != ps[j]) {
        flg = false
      }
    }
    if (flg) {
      ans++
    }
  }
  console.log(ans) 
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
