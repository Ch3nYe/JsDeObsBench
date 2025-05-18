function Main(s) {
  s = s.split("\n");
  const q = +s[0];
  for(var i = 0; i < q; i++){
    var a = s[i+1].split(" ").map(a => +a);
    var b = Math.max(a[0], a[1]);
    a = Math.min(a[0], a[1]);
    var c = Math.ceil(Math.sqrt(a * b));
    var ans = (a - 1) * 2;
    if(a < b - 1) ans++;
    for(var j = a + 1; j < c; j++){
      if(Math.floor(a / j * b) === j)ans++;
      else ans += 2;
    }
    console.log(ans);
  }
}

Main(require("fs").readFileSync("/dev/stdin","utf8"));