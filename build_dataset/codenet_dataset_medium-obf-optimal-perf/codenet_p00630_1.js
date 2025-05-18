var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.replace(/\n$/,"")).split("\n");
while(true){
   var nt=(Arr.shift()).split(" ");
   var str=nt[0];
   var type=nt[1];
   if(type=="X")break;
   str=str.replace(/^./,function(s){
      return s.toLowerCase();
   });
   str=str.replace(/[A-Z]/g,function(s){
      return "_"+s;
   });
   var arr=str.split("_");
   for(var i=1;i<arr.length;i++){
      arr[i]=arr[i].replace(/./,function(s){
         return s.toUpperCase();
      });
   }
   if(type=="U"){
      arr[0]=arr[0].replace(/^./,function(s){
         return s.toUpperCase();
      });
      console.log(arr.join(""));
   }
   if(type=="L")console.log(arr.join(""));
   if(type=="D")console.log(arr.join("_").toLowerCase());
}