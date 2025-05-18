var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
arr.forEach(function(value){
   var vd=value.split(" ").map(Number);
   var v=vd[0];
   var d=vd[1];
   var f=[];
   f[0]=1;
   f[1]=2;
   for(var i=2;i<=v;i++){
      f[i]=(f[i - 1] + f[i - 2])%1001;
   }
   f.shift();
   f.sort(function(a,b){return a-b});
   var cnt=0;
   for(var i=1;i<f.length;i++){
         if(f[i]-f[i-1]<d)cnt++;
   }
   console.log(f.length-cnt);
});