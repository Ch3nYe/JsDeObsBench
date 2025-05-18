var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.replace(/\n$/,"")).split("\n");
while(true){
   var n=Arr.shift()-0;
   if(n==0)break;
   var arr=[];
   for(var i=0;i<n;i++){
      var x=Arr.shift()-0;
      arr.push(x);
   }
   var L=1;
   var cnt=0;
   while(true){
      if(arr.length==L)break;
      for(var i=0;i<arr.length-L;i++){
         var memo=arr[i];
         if(arr[i]>arr[i+1]){
            cnt++;
            arr[i]=arr[i+1];
            arr[i+1]=memo;
         }
      }
   L++;
   }
   console.log(cnt);
}