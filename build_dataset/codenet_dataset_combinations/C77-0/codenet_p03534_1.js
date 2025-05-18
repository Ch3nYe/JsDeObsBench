function Main(s) {
  s = s.trim();
  var a = 0, b = 0, c = 0;
  var ans = "YES";
  for(var i = 0; i < s.length; i++){
    if(s[i] === "a")a++;
    else if(s[i] === "b")b++;
    else c++;
  }
  if(Math.max(a, b, c) - Math.min(a, b, c) > 1)ans = "NO";
  console.log(ans);
}
Main(require("fs").readFileSync("/dev/stdin","utf8"));