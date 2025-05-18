var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var a=[0,0];
var b=[0,0];
var c=[0,0];
var d=[0,0];
for(var i=0;i<Arr.length;i++){
   var arr=Arr[i].split(" ").map(Number);
   for(var j=0;j<2;j++){
      if(arr[j]>=1.1)a[j]++;
      else if(arr[j]>=0.6)b[j]++;
      else if(arr[j]>=0.2)c[j]++;
      else d[j]++;
   }
}
console.log(a[0]+" "+a[1]);
console.log(b[0]+" "+b[1]);
console.log(c[0]+" "+c[1]);
console.log(d[0]+" "+d[1]);