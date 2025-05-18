function seach(x){
   var flag=true;
   var cnt=0;
   var sum=0;
   for(var i=0;i<ary.length;i++){
      if(x<ary[i]){
         flag=false;
         break;
      }else if(sum+ary[i]==x){
         sum=0;
         cnt++;
      }else if(sum+ary[i]>x){
         sum=ary[i];
         cnt++;
      }else if(sum+ary[i]<x){
         sum+=ary[i];
      }
      if(cnt==m){
         flag=false;
         break;
      }
   }
   return flag;
}
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
while(true){
   var mn=arr.shift();
   if(mn=="0 0")break;
   mn=mn.split(" ").map(Number);
   var m=mn[0];
   var n=mn[1];
   var ary=[];
   while(n--)ary.push(arr.shift()-0);
   var L=0;
   var R=1500000
   while(true){
      var middle=Math.floor((L+R)/2);
      if(seach(middle)){
         R=middle-1;
      }else{
         L=middle+1;
      }
      if(L>R)break;
   }
   console.log(R+1);
}