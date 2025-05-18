function main() {
  var
  i = 0, j, flag,
  L, MN;
  for (;;) {
    L = Number(input[i++]);
    if (L === 0) break;
    
    flag = true;
    for (j = 0; j < 12; j++) {
      MN = input[i++].split(' ').map(Number);
      L -= MN[0] - MN[1];
      if (flag && L <= 0) {
        console.log(j + 1);
        flag = false;
      }
    }
    
    if (flag) console.log('NA');
  }
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