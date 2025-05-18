var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var s=input.trim();
for(var i=0;i<s.length-7;i++){
   var arr=[s[i],s[i+1],s[i+2],s[i+3],s[i+4],s[i+5],s[i+6],s[i+7]]; 
   if(arr.join("")=="AIZUNYAN"){
      i+=7;
      continue;
   }  
   var str=arr.sort().join("");
   if(str=="AADINNUY"){
      s=s.slice(0,i)+"AIZUNYAN"+s.slice(i+8,s.length);
      i+=7;
   }
}
console.log(s);