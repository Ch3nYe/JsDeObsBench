var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var e=Arr.shift()-0;
   if(e==0)break;
   var min=Infinity;
   for(var z=0;z<=100;z++){
      for(var y=0;y<=1000;y++){
         var x=e-(Math.pow(z,3)+Math.pow(y,2));
         if(x<0)break;
         min=Math.min(min,z+y+x)
      }
   }
   console.log(min);
}