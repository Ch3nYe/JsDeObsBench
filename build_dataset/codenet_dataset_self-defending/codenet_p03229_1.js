function Main(input) {
    var nums = input.split("\n").map(function(value) { return value - 0; });
    var N = nums.shift();
    nums.sort(function(a,b) { return b - a; });
    var ary = new Array(N);
    var m = 0;
    var r = N - 1;
    for (var l = 0; l < N / 2; l++, r--) {
      ary[m++] = nums[l];
      ary[m++] = nums[r];
    }
    var s = 0, s1 = 0;
    m = N - 1;
    for (var n = 0; n < N - 1; n++) {
      r = (Math.abs(ary[m] - ary[n]));
      s += r;
      m = n;
    }
    for (var n = 0; n < N - 1; n++) {
      r = (Math.abs(ary[n] - ary[n+1]));
      s1 += r;
    }
    console.log(Math.max(s, s1));
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
