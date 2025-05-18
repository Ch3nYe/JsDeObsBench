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
 var abcd = lines[0].split(' ');
 var one = Number(abcd[0]);
 var two = Number(abcd[1]);
 var three = Number(abcd[2]);
 var four = Number(abcd[3]);

 var ans = [];
 ans.push(three + (two - four));
 ans.push((three + four) - one);
 ans.push((one + two) - four);
 ans.push((three + two) - one);

 console.log(ans.join(' '));
 
});