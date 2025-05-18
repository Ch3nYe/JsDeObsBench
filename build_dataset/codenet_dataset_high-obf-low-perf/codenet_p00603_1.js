var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   if(Arr.length==0)break;
   var nr=Arr.shift().split(" ").map(Number);
   var n=nr[0];
   var r=nr[1];
   var card=[];
   for(var i=0;i<n;i++)card[i]=i;
   var arr=Arr.shift().split(" ").map(Number);
   for(var i=0;i<r;i++){
      var v=arr[i];
      var a=[];
      var b=[];
      for(var j=0;j<n;j++)(Math.floor(n/2)>j)?b.push(card[j]): a.push(card[j]);
      card=[];
      while(true){
         if(a.length==0 && b.length==0)break;
         card=card.concat(a.splice(0,v));
         card=card.concat(b.splice(0,v));
      }
   }
   console.log(card[card.length-1]);
}