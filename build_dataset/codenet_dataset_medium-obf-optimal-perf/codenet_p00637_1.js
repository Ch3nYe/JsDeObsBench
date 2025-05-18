var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.replace(/\n$/,"")).split("\n");
while(true){
   var n=Arr.shift()-0;
   if(n==0)break;
   var arr=(Arr.shift()).split(" ").map(Number);
   var x=arr[0];
   var ans=[[x]];
   for(var i=1;i<n;i++){
      if(x+1==arr[i])(ans[ans.length-1]).push(arr[i]);
      else ans.push([arr[i]]);
      x=arr[i];
   }
   ans.forEach(function(v,i){
      if(v.length!==1)ans[i]=v[0]+"-"+v[v.length-1];
      else ans[i]=v[0];
   });
   console.log(ans.join(" "));
}