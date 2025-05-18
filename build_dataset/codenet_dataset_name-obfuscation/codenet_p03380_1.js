function Main(s) {
  s = s.split("\n");
  var a = s[1].split(" ").map(a => +a);
  const n = +s[0];
  var m = Math.max(...a);
  var b = [...a].sort((a,b)=> a-b);
  var c = 9e9;
  for(var i = 0; i < n - 1; i++){
    if(Math.abs(m / 2 - b[i]) < c)c = Math.abs(m / 2 - b[i]);
    else break;
  }
  console.log("%d %d", m, b[i-1]);
}
Main(require("fs").readFileSync("/dev/stdin","utf8"));