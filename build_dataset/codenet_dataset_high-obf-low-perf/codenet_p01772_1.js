var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var str=input.trim();
var a=false;
var ans="";
for(var i=0;i<str.length;i++){
   if(str[i]=="A")a=true;
   if(str[i]=="Z" && a==true){a=false;ans+="AZ";}
}
if(ans=="")ans=-1;
console.log(ans);