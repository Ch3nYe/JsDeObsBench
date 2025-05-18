var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var D=Arr.shift()-0;
var x=Arr.shift()-0;
var X=[];
for(var i=0;i<x;i++){
   var v=Arr.shift().split(" ");
   if(v[0]=="D")X.push(v[1]-0);
}
X.sort(function(a,b){return b-a;});
var y=Arr.shift()-0;
var Y=[];
for(var i=0;i<y;i++){
   var v=Arr.shift().split(" ");
   if(v[0]=="DD")Y.push(v[1]-0);
}
Y.sort(function(a,b){return b-a;});
var max=0;
for(var x=0;x<=X.length;x++){
   for(var y=0;y<=Y.length;y++){
      if(D<x+(y*2))break;
      var sum=0;
      for(var i=0;i<x;i++)sum+=X[i];
      for(var i=0;i<y;i++)sum+=Y[i];
      max=Math.max(max,sum);
   }
}
console.log(max);