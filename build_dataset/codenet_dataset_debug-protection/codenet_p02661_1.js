"use strict";
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var cin = input.trim().split(/ |\n/), cid = 0;

console.log(main().toString());


function main() {
    let n = +cin.shift();
    let a = Array(n);
    let b = Array(n);
    for (let i = 0; i < n; i++) {
        a[i] = +cin.shift();
        b[i] = +cin.shift();
    }
    a = a.sort((x, y) => x - y);
    b = b.sort((x, y) => x - y);
    let min, max;
    if (n % 2 == 0) {
        // 偶数の時 中央値は X(2/n-1)とX(2/n)の平均値
        // 最小値は、それぞれの値が異なるとき、A(2/n)-1/2、同じならA(2/n)
        if (a[n / 2 - 1] != a[n / 2]) min = a[n / 2] - 1 / 2;
        else min = a[2 / n];
        if (b[n / 2 - 1] != b[n / 2]) max = b[n / 2 - 1] + 1 / 2;
        else max = b[n / 2 - 1];
        return (max - min) * 2 + 1;
    } else {
        min = a[(n - 1) / 2];
        max = b[(n - 1) / 2];
        return (max - min) + 1;
    }


}
