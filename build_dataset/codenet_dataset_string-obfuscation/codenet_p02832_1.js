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
  var count = lines[0]
  var ary = lines[1].split(" ").map( x => Number(x) )
  var break_count = 0
  // 1から開始
  var tmp_count = 1
  var c = 0
  for(var i = 0; i < count; i++) {
    if (ary[tmp_count - 1] == tmp_count) {
      c+=tmp_count
      tmp_count++
    } else {
      break_count++
      ary.splice(tmp_count - 1, 1)
    }
  }
  // 順列になっているか
  var judge = false
  if (ary.length == 0) {
    judge = true
  }
  if (sum(ary.length) != c) {
    judge = true
  }

  // 順列になっているかつ 0 の時は0
  if (break_count == 0 && judge) {
    console.log(0)
  } else {
    if (judge) {
      console.log(-1)
    } else {
      console.log(break_count)
    }
  }
  
  // 1~nの総和を求める関数
  function sum(n) {
    return (n * (n + 1) * 0.5)
  }
});
