var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n").map(Number);
arr.some(function(v){
   if(v==0)return true;
   var cnt=0;
   for(var a=1;a<=181;a++){
      var A=a*a;
      if(v<A)break;
      if(A==v)cnt++;
      for(var b=a;b<=181;b++){
         var B=A+b*b;
         if(v<B)break;
         if(B==v)cnt++;
         for(var c=b;c<=181;c++){
            var C=B+c*c;
            if(v<C)break;
            if(C==v)cnt++;
            for(var d=c;d<=181;d++){
               var D=C+d*d;
               if(v<D)break;
               if(D==v)cnt++;
   }}}}
   console.log(cnt);
});