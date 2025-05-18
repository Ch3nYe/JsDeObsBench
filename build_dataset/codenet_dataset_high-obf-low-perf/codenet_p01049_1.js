var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr= input.trim().split("\n");
var n=arr.shift()-0;
var [a,d]=arr.shift().split(" ").map(Number);
var retu=[];
for(var i=0;i<n;i++){
   retu.push(a+i*d);
}
var m=arr.shift()-0;
for(var i=0;i<m;i++){
   var [x,y,z] = arr.shift().split(" ").map(Number);
   if(x==0) [retu[y-1],retu[z-1]]=[retu[z-1],retu[y-1]]
   else retu[y-1]=retu[z-1];
}
var k=arr.shift()-0;
console.log(retu[k-1]);

