var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n").map(Number);
var SEG=[
[1,1,1,1,1,1,0].reverse(),
[0,1,1,0,0,0,0].reverse(),
[1,1,0,1,1,0,1].reverse(),
[1,1,1,1,0,0,1].reverse(),
[0,1,1,0,0,1,1].reverse(),
[1,0,1,1,0,1,1].reverse(),
[1,0,1,1,1,1,1].reverse(),
[1,1,1,0,0,1,0].reverse(),
[1,1,1,1,1,1,1].reverse(),
[1,1,1,1,0,1,1].reverse()
];
var n=Arr[0];
var seg=[];
for(var i=1;i<Arr.length;i++){
   if(n==0){
      if(i==0)continue;
      var arr=[0,0,0,0,0,0,0];
      seg.forEach(function(v){
         var V=SEG[v];
         var str="";
         for(var i=0;i<7;i++){
            str+=(V[i]==arr[i])?"0":"1";
         }
         console.log(str);
         arr=V.slice();
      });
      if(Arr[i]==-1)break;
      seg=[];
      n=Arr[i];
   }else{
      n--;
      seg.push(Arr[i]);
   }
}