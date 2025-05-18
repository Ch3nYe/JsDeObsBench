var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
while(true){
   var [h,w]=arr.shift().split(" ").map(Number);
   if(h==0 && w==0)break;
   var k={};
   for(var i=0;i<h;i++){
      var r=arr.shift().split("");
      for(var j=0;j<w;j++){
         k[r[j]]=[i,j];
      }
   }
   var [s,sum,y,x]=[arr.shift().split(""),0,0,0];
   s.forEach(v=>{
      sum+=Math.abs(y-k[v][0])+Math.abs(x- k[v][1])+1;
      [y,x]=[k[v][0],k[v][1]];
   });
   console.log(sum);
}
