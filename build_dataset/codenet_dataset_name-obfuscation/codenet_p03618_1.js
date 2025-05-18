main();

function main() {
  var readline = require('readline');
  var reader = readline.createInterface({
      input: process.stdin,
      output: process.stdout
  });
  var lines = [];
  reader.on('line', function (line) {
    lines.push(line);
  });
  reader.on('close', function () {
    console.log(countSequencePattern(lines[0]));
  });

}

function countSequencePattern(str) {
  var numberOfPattern = 1;
  var characters = str.split("");
  for (var i = 0; i < characters.length; i++) {
    for (var j = i; j < characters.length; j++) {
      if (characters[i] != characters[j]) numberOfPattern++;
    }
  }
  return numberOfPattern;
}
