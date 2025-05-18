var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
while(true){
   var pqan=arr.shift().split(" ").map(Number);
   if(pqan.join(" ")=="0 0 0 0")break;
   var p=pqan[0];
   var q=pqan[1];
   var a=pqan[2];
   var n=pqan[3];
   var ans=0;
   var loop=function(start,P,Q,A,cnt){
      if(cnt>0){
         if(cnt>n)return;
         if(p*Q==P*q){
            ans++;
            return;
         }else if(p*Q<P*q)return;
      }
      for(var i=start;A*i<=a;i++){
         loop(i,1*Q+i*P,Q*i,A*i,cnt+1);
      }
   };
   loop(1,0,1,1,0);
   console.log(ans);
}