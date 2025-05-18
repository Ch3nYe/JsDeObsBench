function heron(a,b,c){
   var s=(a+b+c)/2;
   var S=Math.sqrt(s*(s-a)*(s-b)*(s-c));
   return S;
}
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
for(var i=0;i<Arr.length;i++){
   var ALX=Arr[i].split(" ").map(Number);
   var A=ALX[0];
   var L=ALX[1];
   var X=ALX[2];
   var sum=0;
   sum+=heron(A,L,L);
   sum+=(heron(L,(L+X)/2,(L+X)/2)*2);
   console.log(sum.toFixed(10));
}