var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
while(true){
   var z=arr.shift()-0;
   if(z==0)break;
   var zzz=z*z*z;
   var ary=[];
   for(var i=z-1;i>0;i--){
      for(var j=i;j>0;j--){
         var x=zzz-i*i*i-j*j*j
         if(x>0)ary.push(x);
      }
   }
   console.log(Math.min.apply(null, ary));
}