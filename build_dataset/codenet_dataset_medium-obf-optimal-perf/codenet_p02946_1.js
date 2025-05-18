var input=`
3 7
`;
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
var k=arr[0].split(" ")[0]-0;
var x=arr[0].split(" ")[1]-0;
var a=[];
for(var i=x-k+1;i<x+k;i++)a.push(i);
console.log(a.join(" "));