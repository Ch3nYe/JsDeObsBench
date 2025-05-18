var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
while(true){
   var nlr=arr.shift().split(" ").map(Number);
   if(nlr.join("")=="000")break;
   var [n,l,r]=[nlr[0],nlr[1],nlr[2]];
   var A = [];
   for(var i=0;i<n;i++) A.push(arr.shift()-0);
   var cnt=0;
   for(var x=l;x<=r;x++){
      var flag=true;
      for(var i=0;i<A.length;i++){
         if(x%A[i]==0){
            flag=false;
            if ((i+1)%2!=0)cnt++;
            break;
         }
      }
      if(flag && n%2==0)cnt++;
   }  
   console.log(cnt);
}
