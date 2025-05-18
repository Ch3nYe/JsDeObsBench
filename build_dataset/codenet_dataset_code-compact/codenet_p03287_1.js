function Main(s){
  s = s.split("\n");
  var n = s[0].split(" ").map(a=>+a);
  var m = n[1]; n = n[0];
  var a = s[1].split(" ").map(a=>+a);
  var ans = 0;
  var b = {};
  var t = 0;
  for(var i = 0; i < n; i++){
    t = (t + a[i]) % m;
    if(b[t])b[t]++; else b[t] = 1;
  }
  for(i in b){
    i = +i;
    if(i === 0)ans += b[i] * (b[i]+1) / 2;
    else if(b[i] > 1)ans += b[i] * (b[i]-1) / 2;
  }
  console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin","utf8"));