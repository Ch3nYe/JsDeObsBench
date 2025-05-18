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
    for (var i = 0; i < n; i++) {
      var values = lines[l++].split(' ').map(Number);
      var pm = values[0];
      var pe = values[1];
      var pj = values[2];
      var ans = 'C';
      if (pm === 100 || pe === 100 || pj === 100) {
        ans = 'A';
      } else if ((pm + pe) / 2 >= 90) {
        ans = 'A';
      } else {
        var average = (pm + pe + pj) / 3;
        if (average >= 80) {
          ans = 'A';
        } else if (average >= 70) {
          ans = 'B';
        } else if (average >= 50 && (pm >= 80 || pe >= 80)) {
          ans = 'B';
        }
      }
      console.log(ans);
    }
  }
});