var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n0,0\n");
var inputA=Arr[0].split("\n");
var inputB=Arr[1].split("\n").map(Number);

var obj={};
var s=[];

inputA.forEach(function(v){
var arr=v.split(",").map(Number);
obj[arr[0]]=arr[1];
s.push(arr[1]);
});

s.sort(function(a,b){return b-a;});

var s0=s[0];
var t=[s0];
for(var i=1;i<s.length;i++){
if(s0==s[i])continue;
s0=s[i];
t.push(s[i]);
}

inputB.forEach(function(v){
console.log(t.indexOf(obj[v])+1);
});