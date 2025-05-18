var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', function (line) {
  var rad,a,S,L,h;
  var e = line.split(' ');
  var b = Number(e[0]);
  var c = Number(e[1]);
  var d = Number(e[2]);
  rad = d / 180 * Math.PI;
  a = Math.sqrt(b*b+c*c-2*b*c*Math.cos(rad));
  S = (b*c*Math.sin(rad))/2;
  L = a+b+c;
  h = (b*c*Math.sin(rad))/b;
  console.log(S.toFixed(8));
  console.log(L.toFixed(8));
  console.log(h.toFixed(8));
  process.exit();
});
process.stdin.on('end', function () {
});