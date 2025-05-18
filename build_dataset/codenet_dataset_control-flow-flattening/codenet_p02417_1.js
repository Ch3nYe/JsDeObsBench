var input = require('fs').readFileSync('/dev/stdin', 'utf8');
input=input.trim();
input=input.toLowerCase();
var abc='abcdefghijklmnopqrstuvwxyz'.split("");
var obj={};
for(var i=0;i<abc.length;i++)obj[abc[i]]=0;

input=input.replace(/[a-z]/g,function(str){
obj[str]++;
return str;
});

abc.forEach(function(v,i){
console.log(v+" : "+obj[v]);
});