function time(x){
   x=x.split("").map(Number);
   return x[0]*10*60+x[1]*60+x[2]*10+x[3];
}
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
while(true){
   var npq=arr.shift();
   if(npq=="0 0 0")break;
   npq=npq.split(" ");
   var n=npq[0]-0;
   var p=time(npq[1]);
   var q=time(npq[2]);
   var tv=[];
   for(var i=p;i<q;i++)tv[i]=0;
   for(var i=0;i<n;i++){
      var cm=arr.shift();
      var ary=arr.shift().split(" ");
      for(var j=0;j<cm;j++){
         var start=time(ary.shift());
         var stop=time(ary.shift());
         for(var k=start;k<stop;k++)tv[k]++;
      }
   }
   var max=0;
   var cnt=0;
   for(var i=p;i<q;i++){
      if(tv[i]!=n){cnt++;}
      else {max=Math.max(max,cnt);cnt=0;}
   }
   max=Math.max(max,cnt);
   console.log(max);
}