var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var strA=input.trim();
var abc="abcdefghijklmnopqrstuvwxyz".split("");
for(var i=0;i<26;i++){
   var strB=strA.replace(/[a-z]/g,function(s){
      return abc[(abc.indexOf(s)+i)%26];
   });
   if(strB.match(/the|this|that/))break;
}
console.log(strB);