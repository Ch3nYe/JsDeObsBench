process.stdin.resume();
process.stdin.setEncoding('utf8');
var lines = [];
var t = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  var x = lines[0].split(' ');
  var a = parseInt(x[0]);
  var b= parseInt(x[1]);
  var c = parseInt(x[2]);
  var d = parseInt(x[3]);
  var ac = a * c;
  var ad = a * d;
  var bc = b * c;
  var bd = b * d;
  t.push(ac);
  t.push(ad);
  t.push(bc);
  t.push(bd);
  console.log(Math.max.apply(null,t));
});