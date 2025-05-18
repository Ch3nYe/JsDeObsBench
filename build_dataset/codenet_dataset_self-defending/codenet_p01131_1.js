var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var AL=Arr.shift();
var abc=["",".,!? ","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
abc=abc.map(function(v){return v.split("");});
for(var i=0;i<AL;i++){
   var arr=Arr[i].split("").map(Number);
   var str="";
   var a="";
   var n=-1;
   arr.forEach(function(v){
      if(v>0){
         n++;
         a=abc[v][n%abc[v].length];
      }else{
         str+=a;
         n=-1;
         a="";
      }
   });
console.log(str);
}