"use strict";
function Main(input) {
    var lines = input.split("\n");
    var N = lines.shift() - 0;
    var ryo = new Array(N);
    for (var n = 0; n < N; n++) {
        var nums = lines[n].split(" ");
        ryo[n] = {
            taka : nums[0] - 0,
            aoki : nums[1] - 0,
        };
        ryo[n].sa = ryo[n].aoki - ryo[n].taka;
    }
    ryo.sort(function(a, b) { return b.sa - a.sa; });
    ryo.sort(function(a, b) { return b.taka - a.taka; });
    var koufuku = 0;
    for (var n = 0; n < N; n++) {
        if (n % 2 == 0) {
            koufuku += ryo[n].taka;
            ryo[n].taka = 0;
        } else {
            koufuku -= ryo[n].aoki;
            ryo[n].aoki = 0;
        }
    }
    console.log(koufuku);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
