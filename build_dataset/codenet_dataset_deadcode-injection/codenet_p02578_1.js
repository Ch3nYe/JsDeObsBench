process.stdin.resume();
process.stdin.setEncoding('utf8');
 
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  var N = parseInt(lines[0]);
 
  var sum = 0;
  var MaxNum = 0;
  for (var i = 0; i < N; i++) {
    var Ai = parseInt(lines[1].split(' ')[i]);
	MaxNum = Math.max(MaxNum, Ai);
    sum += MaxNum - Ai;
  }
  
  console.log(sum);
});