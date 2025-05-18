function Main(s){
  s = s.split("\n");
  var n = s[0].split(" ").map(a=>+a);
  var m = n[1];
  n = n[0];
  var x;
  var a = Array(4).fill(0).map(a=>Array(n));
  for(var i = 0; i < n; i++){
    x = s[i+1].split(" ").map(a=>+a);
    a[0][i] = x[0] + x[1] + x[2];
    a[1][i] = x[0] + x[1] - x[2];
    a[2][i] = x[0] - x[1] + x[2];
    a[3][i] = -x[0] + x[1] + x[2];
  }
  var ans = 0;
  for(i = 0; i < 4; i++){
    a[i].sort((a,b)=>a-b);
    var t = 0;
    for(var j = 0; j < m; j++){
      t += a[i][j];
    }
    ans = Math.max(ans, Math.abs(t));
    t = 0;
    for(j = n; j > n - m;){
      t += a[i][--j];
    }
    ans = Math.max(ans, Math.abs(t));
  }
  
  console.log(ans);
}
Main(require("fs").readFileSync("/dev/stdin","utf8"));