process.stdin.resume();
process.stdin.setEncoding('utf8');
var input = '';
process.stdin.on('data', function (chunk) {
  input += chunk;
});
process.stdin.on('end', function () {
  var lines = input.split('\n');
  var l = 0;
  while (true) {
    var n = Number(lines[l++]);
    if (n === 0) {
      break;
    }
    var sales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (var i = 0; i < n; i++) {
      sales[Number(lines[l++])]++;
    }
    for (var i = 0; i < sales.length; i++) {
      var bar = (sales[i] === 0) ? '-' : '';
      for (var j = 0; j < sales[i]; j++) {
        bar += '*';
      }
      console.log(bar);
    }
  }
});