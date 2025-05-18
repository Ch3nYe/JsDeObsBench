var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr = input.trim().split("\n");
while(true){
   var [n,k,m]=arr.shift().split(" ").map(Number);
   if(n+k+m==0)break;
   var a=[];
   for(var i=0;i<n;i++)a[i]=true;
   var z = m-1;
   var sum=n;
   while(true){
      if(sum==1)break;
      a[z]=false;
      sum--;
      var cnt = 0;
      while(true){
         if(cnt==k)break;
         z++;
         if(z>=n)z=0;
         if(a[z])cnt++;
      }
   }
   a.forEach((v,i)=>{
      if(v)console.log(i+1);
   });
}
