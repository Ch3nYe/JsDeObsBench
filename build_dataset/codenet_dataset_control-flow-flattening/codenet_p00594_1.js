var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
while(true){
   var n=arr.shift()-0;
   if(n===0)break;
   var ary=arr.shift().split(" ");
   var obj={};
   ary.forEach(function(v){obj[v]=0;});
   ary.forEach(function(v){obj[v]++;});
   var ans="NO COLOR";
   var half=n/2;
   for(var k in obj){
      if(obj[k]>half){ans=k;break;}
   }
   console.log(ans);
}