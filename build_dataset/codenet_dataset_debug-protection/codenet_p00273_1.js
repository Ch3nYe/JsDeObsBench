var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var N=Arr.shift()-0;
for(var i=0;i<N;i++){
   var arr=(Arr.shift()).split(" ").map(Number);
   var x=arr[0];
   var y=arr[1];
   var b=arr[2];
   var p=arr[3];
   var A=(x*b)+(y*p);
   while(b<5)b++;
   while(p<2)p++;
   var B=((x*b)+(y*p))*0.8;
   console.log(Math.min(A,B));
}