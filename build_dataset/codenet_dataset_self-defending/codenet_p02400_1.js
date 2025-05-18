var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', function (line) {
  var a = line.split(' ');
  var b = parseInt(a[0],10);
  var c = b*b*Math.PI;
  var d = b*2*Math.PI;
  console.log(c.toFixed(6)+" "+d.toFixed(6));
  process.exit();
});
process.stdin.on('end', function () {
});