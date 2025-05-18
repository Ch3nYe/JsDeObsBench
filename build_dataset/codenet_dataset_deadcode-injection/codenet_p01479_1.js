var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var str=input.replace(/egg/g,"E").replace(/chicken/g,"C");
var ary=str.replace(/EE/g,"EAE").replace(/CC/g,"CAC").split("A");
var ans="";
ary.forEach(function(v){
   if(ans.length<v.length)ans=v;
});
console.log((ans.slice(-1)=="E")?"egg":"chicken");