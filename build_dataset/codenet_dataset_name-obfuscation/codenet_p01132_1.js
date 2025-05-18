var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var j=0;
while(true){
   var v=Arr.shift()-0;
   if(v==0)break;
   var m=(Arr.shift()).split(" ").map(Number);
   var money=(10*m[0]+50*m[1]+100*m[2]+500*m[3])-v;
   var M=[0,0,0,0];
   while(500<=money){M[3]++;money-=500;}
   while(100<=money){M[2]++;money-=100;}
   while(50<=money){M[1]++;money-=50;}
   while(10<=money){M[0]++;money-=10;}
   var coin=[10,50,100,500];
   var str="";
   m.forEach(function(v,i){
      if(v>M[i])str+=coin[i]+" "+(v-M[i])+"\n";
   });
   console.log(str);
}