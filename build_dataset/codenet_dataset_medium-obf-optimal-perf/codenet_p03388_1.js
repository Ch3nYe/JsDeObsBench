function Main(s) {
  s = s.split("\n");
  const q = +s[0];
  for(var i = 0; i < q; i++){
    var a = s[i+1].split(" ").map(a => +a);
    var b = Math.max(a[0], a[1]);
    a = Math.min(a[0], a[1]);
    var c = Math.ceil(Math.sqrt(a * b)) - 1;
    var ans = (a - 1) * 2;
    if(a < b - 1) ans++;
    ans += Math.max(c - a, 0) * 2;
    if(Math.floor(a / c * b) === c) ans--;
    console.log(ans);
  }
}

Main(require("fs").readFileSync("/dev/stdin","utf8"));