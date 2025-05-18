var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var a=Arr.shift();
   if(a=="0")break;
   var xy=[];
   for(var i=0;i<a;i++)xy.push(Arr.shift());
   var b=Arr.shift();
   var news=[];
   for(var i=0;i<b;i++)news.push(Arr.shift());
   var X=10;
   var Y=10;
   var XY=[];
   news.forEach(function(v){
      var arr=v.split(" ");
      for(var i=0;i<(arr[1]-0);i++){
         if(arr[0]=="N")Y++;
         if(arr[0]=="E")X++;
         if(arr[0]=="W")X--;
         if(arr[0]=="S")Y--;
         XY.push(X+" "+Y);
      }
   });
   var flag=xy.every(function(v){return (XY.indexOf(v)!=-1);});
   console.log(flag?"Yes":"No");
}