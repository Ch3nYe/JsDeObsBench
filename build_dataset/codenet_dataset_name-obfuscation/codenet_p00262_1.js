var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var n=Arr.shift()-0;
   if(n==0)break;
   var arr=(Arr.shift()).split(" ").map(Number);
   var cnt=0;
   while(true){
      var flag=arr.every(function(v,i){return (i+1==v);});
      if(flag)break;
      var L=arr.length;
      arr=arr.map(function(v){return v-1;});
      arr=arr.filter(function(v){return (v!=0);});
      arr.push(L);
      cnt++;
      if(cnt==10000){cnt=-1;break;}
   }
   console.log(cnt);
}