function main(tmp) {
  var i = 0;
  while(tmp[i]!=0 && tmp[i+1]!=0){
    if(tmp[i]<tmp[i+1])
      console.log(tmp[i]+" "+tmp[i+1]);
    else
      console.log(tmp[i+1]+" "+tmp[i]);
    i = i + 2;
  }
}
var lines = [];
var b = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', function (line) {
  var a = line.split(' ');
  var c = parseInt(a[0],10);
  var d = parseInt(a[1],10);
  b.push(c);
  b.push(d);
  if(c==0 && d==0)
    main(b);
});
process.stdin.on('end', function () {
});