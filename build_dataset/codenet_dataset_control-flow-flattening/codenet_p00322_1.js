var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var x=input.trim().split(" ").map(Number);
var cnt=0;
for(var a=1;a<=9;a++){
for(var b=1;b<=9;b++){
for(var c=1;c<=9;c++){
for(var d=1;d<=8;d++){
for(var e=1;e<=9;e++){
for(var f=1;f<=9;f++){
var z=((a+c+f+(b+e)*10+d*100)+"").split("").map(Number);
if(z.length!=3)continue;
z=[a,b,c,d,e,f].concat(z);
var flag = z.every(function(v,i){
   return  (x[i] == v || x[i] == -1) && (z.indexOf(i+1)>=0) ;
});
if(flag)cnt++;
}}}}}}
console.log(cnt);