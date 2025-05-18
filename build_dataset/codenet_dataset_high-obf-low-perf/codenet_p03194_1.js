function Main(input) {
  // 入力
	var input = input.split(' ');
	var n = parseInt(input[0], 10);
  var p = parseInt(input[1], 10);
  var arr = [];
  var counts = [];
  var ans = 1;

  // 計算
  var i =2;
  while (i <= p) {
    while (p % i === 0) {
      arr.push(i);
      p = Math.floor(p / i);
    }
    i++;
  }

  for(var i = 0; i < arr.length; i++) {
    var key = arr[i];
    counts[key] = (counts[key])? counts[key] + 1 : 1 ;
  }

  var b = arr.filter(function (x, i, self) {
    return self.indexOf(x) === i;
  });
  for (var i = 0; i < b.length; i++) {
    if (counts[b[i]] >= n) {
      ans *= b[i];
    }
  }
  console.log(ans);

}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));