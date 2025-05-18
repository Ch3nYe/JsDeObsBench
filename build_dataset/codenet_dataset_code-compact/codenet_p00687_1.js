var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
while(true){
var nab=arr.shift();
   if(nab=="0 0 0")break;
   nab=nab.split(" ").map(Number);
   var n=nab[0];
   var ab=[nab[1],nab[2]];
   var dp=[];
   for(var i=0;i<=n;i++)dp[i]=false;
   dp[0]=true;
   for(var i=0;i<ab.length;i++){
      for(var j=0;j<=n;j++){
         if(dp[j])dp[j+ab[i]]=true;
      }
   }
   var cnt=0;
   dp.forEach(function(v){
      if(v==false)cnt++;
   });
   console.log(cnt);
}