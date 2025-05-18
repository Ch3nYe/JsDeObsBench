var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
var [n,c]=arr[0].split(" ").map(Number);
var p=arr[1].split(" ").map(Number);
var sum=p.reduce((a,b)=> a+b);
var x=(sum%(n+1)==0)?0:1;
console.log(Math.floor(sum/(n+1))+x);
