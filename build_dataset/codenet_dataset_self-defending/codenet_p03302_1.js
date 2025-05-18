function Main(s){
  s = s.split(" ").map(a=>+a);
  var ans = "x";
  if(s[0] + s[1] === 15)ans = "+";
  if(s[0] * s[1] === 15)ans = "*";
  console.log(ans);
}
Main(require("fs").readFileSync("/dev/stdin","utf8"));