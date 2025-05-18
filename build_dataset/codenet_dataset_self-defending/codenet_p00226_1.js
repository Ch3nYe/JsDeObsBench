var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
for(var i=0;i<Arr.length;i++){
if(Arr[i]=="0 0")break;
var arr=Arr[i].split(" ");
var x=(arr[0]).split("");
var y=(arr[1]).split("");
var h=0;
var b=0;
for(var j=0;j<4;j++){
   if(x[j]==y[j]){h++;}
   else if(y.indexOf(x[j])!=-1){b++;}
}
console.log(h+" "+b);
}