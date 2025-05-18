function Main(input) {
  input = input.split("\n");
  
  const N = parseInt(input[0], 10);

  var x = [];
  var y = [];

  for (var i = 1; i <= N; i++) {
    tmp = input[i].split(" ").map(n => parseInt(n, 10));
    x.push(tmp[0]);
    y.push(tmp[1]);
  }

  var counts = [];

  for(var j = 0; j < N; j++){
    var count = 0;
    for(var k = 0; k < N; k++){
      if((x[j] > x[k] && y[j] > y[k])||(x[j] < x[k] && y[j] < y[k])){
        count++;
      }
    }
    counts.push(parseInt(count, 10))
  }

  for(var j = 0; j < N; j++){
    var count = 1;
    for(var k = 0; k < N; k++){
      if((x[j] > x[k] && y[j] > y[k])||(x[j] < x[k] && y[j] < y[k])){
        count = count + counts[k];
      }
    }
    console.log(count);
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));