log = console.log;

var stdin = require("fs").readFileSync("/dev/stdin", "UTF-8");
var lines = stdin.split("\n");
var N = lines[0].split(" ").map(Number)[0];
var T = lines
  .slice(1)
  .filter(v => v !== "")
  .map(Number);

function gcd(a,b){
  if(b === 0) return a
  return gcd(b,a % b)
}

function lcm(a,b){
  return a * b / gcd(a,b)
}

for(var i=1; i<N;i++){
  T[i] = lcm(T[i],T[i-1])
}

log(T[N-1])