function GCD(a,b){
   var m=Math.max(a,b);
   var n=Math.min(a,b);
   while(n!=0){
      var N=n;
      n=m%n;
      m=N;
   }
   return m;
}
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=input.trim().split("\n");
while(true){
   var n=Arr.shift()-0;
   if(n==0)break;
   var arr=[];
   for(var I=0;I<n;I++){
      var v=Arr.shift().split(" ").map(Number);
      var gcd=GCD(v[0],v[1]);
      arr.push([v[0]/gcd,v[1]/gcd]);
   }
   var lcm=1;
   arr.forEach(function(v){
      var gcd=GCD(v[1],lcm);
      lcm=(v[1]*lcm)/gcd;
   });
   arr=arr.map(function(v,i){return v[0]*(lcm/v[1]);});
   var lcm=1;
   arr.forEach(function(v){
      var gcd=GCD(v,lcm);
      lcm=(v*lcm)/gcd;
   });
   arr.forEach(function(v){console.log(lcm/v);});
}