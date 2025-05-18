"use strict";
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var cin = input.split(/ |\n/), cid = 0;

var myOut = main();
if (myOut !== undefined) console.log(myOut);

function main() {
    //console.log(cin);
    //   cin = cin.map(i => +i);
    let n = +cin.shift();
    let B = {};
    let C = {};
    cin.forEach((v, i) => {
        let x = +v;
        B[String(i + x)] = B[String(i + x)] + 1 || 1;
        C[String(i - x)] = C[String(i - x)] + 1 || 1;
    });
    //console.log({ B, C })
    let keys = Object.keys(B);
    let ans = 0;
    keys.forEach(i => {
        ans += (B[i] * C[i] || 0);
        //console.log(i, B[i], C[i]);
    });


    return ans;
}