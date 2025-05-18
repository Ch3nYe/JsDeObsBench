function Main(s){
  s = s.split(" ").map(a=>+a);
  var n = s[0];
  var a = calc(s[1]);
  var b = calc(s[2]);
  var ans = [];
  var k = 0;
  for(var i = 0; i < 2 * n; i++)
  for(var j = 0; j < 2 * n; j++){
    if(f(a,i,j) && f(b,i,j))ans[k++] = i + " " + j;
    if(k === n * n){console.log(ans.join("\n"));return;}
  }
}
function calc(n){
  var s = 1;
  while((n & 3) === 0){
    s++;
    n >>>= 2;
  }
  return [s, n & 1];
}
function f(s,y,x){
  y = Math.floor(y / s[0]);
  if(!s[1])return !(y&1);
  x = Math.floor(x / s[0]);
  return !(x+y&1);
}
Main(require("fs").readFileSync("/dev/stdin","utf8"));