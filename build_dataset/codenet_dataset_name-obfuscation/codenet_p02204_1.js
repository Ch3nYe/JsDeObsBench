var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
var [m,n]=arr.shift().split(" ").map(Number);
var a=arr.shift().split(" ");
if(m==2){
   var cnt=[0,0];
   for(var i=0;i<n;i++){
      if(a[i]-1==i%2)cnt[0]++;
      if(a[i]-1==(i+1)%2)cnt[1]++;
   }
   console.log(Math.min(...cnt));
}else{
   var cnt=0;
   for(var i=1;i<n;i++){
      if(a[i-1] == a[i]){
         cnt++;
         i++;
      }
   }
   console.log(cnt);
}
