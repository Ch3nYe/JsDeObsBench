var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
var nq=arr.shift().split(" ").map(Number);
var player=[];
var maxValue=0;
var maxId=0;
for(var i=0;i<nq[0];i++)player[i]=0;
arr.forEach(function(V){
   var av=V.split(" ").map(Number);
   var a=av[0]-1;
   var v=av[1];
   player[a]+=v;
   if(a==maxId && v>=0)maxValue+=v;
   else if(maxValue==player[a] && maxId>a)maxId=a;
   else if(maxValue<player[a]){maxValue=player[a];maxId=a;}
   else if(a==maxId && v<0){
      var max=(-1*Infinity);
      player.forEach(function(value,index){
         if(max<value){max=value;maxValue=value;maxId=index;}
      });
   }
   console.log((maxId+1)+" "+maxValue);
});