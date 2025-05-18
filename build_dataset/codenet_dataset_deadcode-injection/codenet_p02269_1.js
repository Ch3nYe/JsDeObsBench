var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
Arr.shift();
var obj={};
Arr.forEach(function(v){
var arr=v.split(" ");
if(arr[0]=="insert")obj[arr[1]]=true;
if(arr[0]=="find")console.log(obj.hasOwnProperty(arr[1]) ? "yes":"no");
});