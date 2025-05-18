var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var mn=(Arr.shift()).split(" ").map(Number);
   if(mn[0]==0 && mn[1]==0)break;
   var player=[];
   for(var i=0;i<mn[0];i++)player[i]=i+1;
   var arr=[];
   for(var i=0;i<mn[1];i++){
      var v=Arr.shift();
      arr.push(v);
   }
   var i=1;
   var k=0;
   var len=mn[0];
   for(var I=0;I<arr.length;I++){
      var v=arr[I];
      var str="";
      if(i%3==0)str+="Fizz";
      if(i%5==0)str+="Buzz";
      if(str=="")str=i;
      if(v!=str){
         player[k]=false;
         len++;
         if(len==1)break;
      }
      i++;
      var H=0;
      do{
      H++;
      if(H>1000)break;
      k++;
      if(k>=player.length){
         player=player.filter(function(v){return v!=false;});
         k=0;
      }
      }while(player[k]==false);
   }
   player=player.filter(function(v){return v!=false;});
   console.log(player.join(" "));
}