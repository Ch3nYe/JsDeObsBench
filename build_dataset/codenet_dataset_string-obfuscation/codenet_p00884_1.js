var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var n=Arr.shift()-0;
   if(n==0)break;
   var first=Arr.shift().split(":");
   first=first[1].slice(0,-1).split(",");
   var F={};
   first.forEach(function(v){F[v]=true;});
   var obj={};
   for(var i=0;i<n-1;i++){
      var arr=Arr.shift().split(":");
      obj[arr[0]]=arr[1].slice(0,-1).split(",");
   }
   var L=0;
   while(true){
      if(L==Object.keys(F).length)break;
      L=Object.keys(F).length;
      for(var k in F){
         if(obj.hasOwnProperty(k) && F[k]){
            obj[k].forEach(function(v){F[v]=true;});
            F[k]=false;
         }
      }
   }
   var cnt=0;
   for(var k in F)if(obj.hasOwnProperty(k)==false)cnt++;
   console.log(cnt);
}