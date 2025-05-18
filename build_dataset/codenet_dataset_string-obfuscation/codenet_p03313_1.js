function Main(s){
  s = s.split("\n");
  var n = +s[0];
  var m = 1 << n;
  var a = s[1].split(" ").map(a=>+a);
  var b = [a[0]], c = [[a[0],0]], d = [[-1,-1]];
  for(var i = 1; i < m; i++){
    f(i);
  }
  console.log(b.slice(1).join("\n"));
  
  function f(n){
    var q = {}, s = n, t = 0;
    while(s){
      t++;
      s >>= 1;
    }
    for(var i = 0; i < t; i++){
      var u = n & ((1 << i) ^ 0xFFFFF);
      if(u === n)continue;
      q[c[u][1]] = c[u][0];
      q[d[u][1]] = d[u][0];
    }
    s = [a[n],n], t = [-1,-1];
    for(i in q){
      if(t[0] > q[i])continue;
      if(s[0] > q[i])t = [q[i],i];
      else{t = s; s = [q[i],i];}
    }
    b[n] = Math.max(b[n-1], t[0] + s[0]);
    c[n] = t;
    d[n] = s;
  }
}
Main(require("fs").readFileSync("/dev/stdin","utf8"));