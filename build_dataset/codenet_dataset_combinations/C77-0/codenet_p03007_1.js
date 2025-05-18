log = console.log;
var stdin = require("fs").readFileSync("/dev/stdin", "UTF-8");
var lines = stdin
  .split("\n")
  .filter(v => v !== "")
  .map(v => v.split(" ").map(Number));

var N = lines[0];
var A = lines[1];
var processList = [];

A.sort((a, b) => a - b);
var plusList = [];
var minusList = [];
plusList.push(A.pop());
minusList.push(A.shift());

A.forEach(v => {
  v >= 0 ? plusList.push(v) : minusList.push(v);
});

var tmp = minusList.pop();
for (var i = 0; i < plusList.length - 1; i++) {
  var plus = plusList.pop();
  processList.push(tmp + " " + plus);
  tmp = tmp - plus;
}

var lastplus = plusList.pop()
for (var i = 0; i < minusList.length; i++) {
  var minus = minusList.pop();
  processList.push(lastplus + " " + minus);
  lastplus = lastplus - minus;
}

processList.push(lastplus + " " + tmp)
log(lastplus - tmp)
processList.forEach(v=>log(v))