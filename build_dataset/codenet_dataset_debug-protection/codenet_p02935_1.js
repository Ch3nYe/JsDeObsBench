process.stdin.resume();
process.stdin.setEncoding('utf8');

var lines = []
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.on('line', (line) => {
  lines.push(line);
});

reader.on('close', () => {
 var n = Number(lines[0]);
 var v = lines[1].split(' ');
 v = v.map(function(str) { return Number(str)});

 for(i=0; i<n-1; i++){
   var min1 = v.sort((a, b)=> a - b)[0];
   v.splice(0,1);
   var min2 = v[0];
   v.splice(0,1);
   var a = (min1 + min2)/2;
   if(v.length == 0){
     break;
   }
   v.push(a);
 }
 console.log(a);
});