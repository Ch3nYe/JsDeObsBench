var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
var [a,b]=arr.shift().split(" ").map(Number);
var [p,q,r]=arr.shift().split(" ").map(Number);
var hanareta=b*p;
var tikaduita=(b-a)*q;
var d=hanareta-tikaduita;
console.log((d/(q+r)+b).toFixed(12));
