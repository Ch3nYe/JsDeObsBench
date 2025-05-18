var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
while(true){
   var n=arr.shift()-0;
   if(n===0)break;
   var ary=[];
   for(var i=0;i<n;i++)ary.push(arr.shift().split(" ").map(Number));
   ary.sort(function(a,b){
      if(a[2]==b[2] && a[3]==b[3])return a[0]-b[0];
      else if(a[2]==b[2])return a[3]-b[3];
      else return b[2]-a[2];
   });
   var ans=[];
   var U=[];
   for(var i=0;i<=1000;i++)U[i]=0;
   ary.forEach(function(v,i){
      var id=v[0];
      var u=v[1];
      if(i<10){
         if(U[u]<3){ans.push(id);U[u]++;}
      }else if(i<20){
         if(U[u]<2){ans.push(id);U[u]++;}
      }else if(i<26){
         if(U[u]==0){ans.push(id);U[u]++;}
      }
   });
   console.log(ans.join("\n"));
}