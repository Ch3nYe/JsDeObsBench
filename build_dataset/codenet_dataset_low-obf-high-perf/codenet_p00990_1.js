function over(x){
   if(x>=10)x=x-10+1;
   return x;
}
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
var n=arr.shift()-0;
var id=arr.shift().split("");
id.reverse();
var a=arr.shift()-0;
var ary=arr.shift().split(" ").map(Number);
var k=[];
var sum=0;
for(var i=0;i<id.length;i++){
   var v=id[i];
   if(v=="*"){
      if(i%2==0)k.push(1);
      else k.push(2);
   }else{
      if(i%2==0)sum+=v-0;
      else sum+=over((v-0)*2);
   }
}
var dp=[];
for(var i=0;i<=k.length;i++){
   dp[i]=[];
   for(var s=0;s<100;s++)dp[i][s]=0;
}
 
dp[0][0]=1;
 
for(var i=0;i<k.length;i++){
   for(var j=0;j<ary.length;j++){
      for(var s=0;s<100;s++){
         dp[i+1][s+over(ary[j]*k[i])]+=dp[i][s];
      }
   }
}
var ans=0;
for(var s=0;s<100;s++){
   if((sum+s)%10==0)ans+=dp[k.length][s];
}
console.log(ans);