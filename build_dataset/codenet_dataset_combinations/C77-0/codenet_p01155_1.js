var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
while(true){
   var ab=arr.shift().split(" ").map(Number);
   if(ab.join(" ")=="0 0")break;
   var a=ab[0];
   var b=ab[1];
   var A=[];
   var B=[];
   for(i=1;i<=Math.sqrt(a);i++){
      if(a%i==0)A.push([a/i,i]);
   }
   for(i=1;i<=Math.sqrt(b);i++){
      if(b%i==0)B.push([b/i,i]);
   }
   var min=Infinity;
   A.forEach(function(va){
      B.forEach(function(vb){
         var c=[va[0],va[1],vb[0],vb[1]];
         c.sort(function(a,b){return a-b;});
         min=Math.min(min,Math.pow(c[0]-c[1],2)+Math.pow(c[1]-c[2],2)+Math.pow(c[2]-c[3],2));
      });
   });
   console.log(min);
}