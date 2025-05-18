var input = require('fs').readFileSync('/dev/stdin', 'utf8');
input=input.replace(/\?/g,".");
var arr=input.trim().split("\n");
while(true){
   var nm=arr.shift().split(" ").map(Number);
   var n=nm[0];
   var m=nm[1];
   if(n==0 && m==0)break;
   var rule=[];
   while(n--){
      var ary=arr.shift().split(" ");
      var flag=(ary[0]=="permit")?true:false;
      rule.push([flag,new RegExp(ary[1]+ary[2])]);
   }
   var ans=[];
   while(m--){
      var packet=arr.shift().split(" ");
      var str=packet[0]+packet[1];
      var flag=false;
      rule.forEach(function(v){
         if(v[0]==true && v[1].test(str))flag=true;
         else if(v[0]==false && v[1].test(str))flag=false;  
      });
      if(flag)ans.push(packet.join(" "));
   }
   console.log(ans.length);
   ans.forEach(function(v){console.log(v);});
}