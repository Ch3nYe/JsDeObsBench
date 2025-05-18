var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var N=Arr.shift()-0;
   if(N==0)break;
   var plus={};
   var minus={};
   var pm=[];
   for(var i=0;i<N;i++){
      var arr=(Arr.shift()).split(" ").map(Number);
      var m=arr[0];
      var a=arr[1];
      var b=arr[2]-(0.001*N);
      plus[a]=m;
      minus[b]=m;
      pm.push(a);
      pm.push(b);
   }
   pm.sort(function(a,b){return a-b;});
   var flag="OK";
   var sum=0;
   for(var i=0;i<pm.length;i++){
      var v=pm[i];
      if(plus.hasOwnProperty(v))sum+=plus[v];
      if(minus.hasOwnProperty(v))sum-=minus[v];
      if(sum>150){flag="NG";break;}
   }
   console.log(flag);
}