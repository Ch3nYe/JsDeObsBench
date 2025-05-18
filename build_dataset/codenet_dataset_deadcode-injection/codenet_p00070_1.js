function perm(xs, n, s, callback) {
  var
  x, i, len = xs.length;
  s = s || [];
  if(n === 0) {
    callback(s);
  }else{
    for(i = 0; i < len; i++){
      x = xs.shift();
      s.push(x);
      perm(xs, n - 1, s, callback);
      s.pop();
      xs.push(x);
    }
  }
}

function main() {
  input.forEach(function(line) {
    var
    n, s,
    r = 0;
    if(line.trim() === '') return;
    line = line.split(' ').map(parseFloat);
    n = line[0]; s = line[1];
    perm([0,1,2,3,4,5,6,7,8,9], n, [], function(xs) {
      r += xs.reduce(function(m, x, i) {
        return m + x * (i + 1);
      }, 0) === s ? 1 : 0;
    });
    console.log(r);
  });
}

var
input = '';

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
  input += chunk;
});
process.stdin.on('end', function() {
  input = input.split('\n');
  main();
});