var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
var [h,w]=arr.shift().split(" ").map(Number);
var b=[];
for(var i=0;i<h;i++){
   var two=[];
   arr[i].split("").forEach((v,j)=>{
      if(v=="B")two.push([i,j]);
   });
   if(two.length==1)b.push(two[0]);
   else if(two.length>=2)b.push(two[0],two[two.length-1]);
}
var max=0;
for(var i=0;i<b.length;i++){
   for(var j=i+1;j<b.length;j++){
      var d=Math.abs(b[i][0]-b[j][0])+Math.abs(b[i][1]-b[j][1]);
      max=Math.max(max,d);
   }
}
console.log(max);

