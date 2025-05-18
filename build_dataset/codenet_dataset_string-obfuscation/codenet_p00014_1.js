process.stdin.on("data",function(c){
  (c+"").trim().split("\n").some(function(n){
    for(var d=+n,i=1,a=0,t;t=i++*d,t<600?a+=t*t*d:0;);
    console.log(a);
  });
}).resume();