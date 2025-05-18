function Main(s){
  s = s.split("\n");
  var n = +s[0];
  for(var i = 0; i < n; i++){
    s[i] = s[i+1].split(" ").map(a=>+a);
  }
  var ans = 0;
  for(i = n-1; i >= 0; i--){
    var x = (s[i][0] + ans) % s[i][1];
    if(x)ans += s[i][1] - x;
  }
  console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin","utf8"));