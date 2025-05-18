var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=(input.trim()).split("\n");
while(true){
   var nm=arr.shift();
   if(nm=="0 0 0")break;
   nm=nm.split(" ").map(Number);
   var n=nm[0];
   var m=nm[1];
   var start=nm[2];
   var ary=[];
   for(var i=0;i<=n;i++)ary[i]=true;
   var i=start;
   var j=0;
   ary[start]=false;
   var cnt=1;
   while(true){
      if(ary[i]){
         j++;
         if(j==m){
            ary[i]=false;
            j=0;
            cnt++;
            if(cnt==ary.length-2)break;
         }
      }
      i++;
      if(ary.length-1<i)i=1;
   }
   for(var i=1;i<=n;i++){
      if(ary[i])console.log(i);
   }
}