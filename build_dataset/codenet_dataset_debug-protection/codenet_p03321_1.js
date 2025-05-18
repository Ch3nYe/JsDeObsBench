function Main(s){
  s = s.split("\n");
  var n = s[0].split(" ").map(a=>+a);
  var m = n[1];
  n = n[0];
  var b = Array(n).fill(0).map(a=>Array(n).fill(0));
  for(var i = 0; i < m; i++){
    var a = s[i+1].split(" ").map(a=>a-1);
    b[a[0]][a[1]] = b[a[1]][a[0]] = 1;
  }
  var k = 9e9;
  var x;
  for(i = 0; i < n; i++){
    var t = b[i].reduce((a,b)=>a+b);
    if(k > t){k = t; x = i;}
  }
  var y=[], z=[];
  for(i = 0; i < n; i++){
    if(i === x)continue;
    if(b[x][i])y.push(i); else z.push(i);
  }
  for(i = 0; i < y.length; i++)
  for(var j = i + 1; j < y.length; j++){
    if(!b[y[i]][y[j]]){console.log(-1);return;}
  }
  for(i = 0; i < z.length; i++)
  for(j = i + 1; j < z.length; j++){
    if(!b[z[i]][z[j]]){console.log(-1);return;}
  }
  console.log(k*(k+1)/2+(n-k-1)*(n-k-2)/2);
}
Main(require("fs").readFileSync("/dev/stdin","utf8"));