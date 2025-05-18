(function(stdin){
  input = stdin.split("\n");
  var n = parseInt(input[0], 10);
  var a = input[1].split(" ");

  var ans = 1;
  var up = false;
  var down = false;
  for (var i = 0; i < n - 1; i++) {
    if (a[i] < a[i + 1]) {
      up = true;
    }

    if (a[i] > a[i + 1]) {
      down = true;
    }

    if (up && down) {
      up = down = false;
      ans++;
    }
  }

  console.log("%d", ans);
})(require("fs").readFileSync("/dev/stdin", "utf8"));