"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf8");

var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.on("line", line => {
  let word = line;
  let arr = ["k", "e", "y", "e", "n", "c", "e"];
  let keyence = "keyence";

  if (word.indexOf("keyence") != -1) {
    console.log("YES");
    return;
  }

  let str = "";
  let ans = false;
  for (let i = 0; i < 6; i++) {
    str += arr.shift();
    let tmp = keyence.slice(i + 1);
    if (word.indexOf(str) != -1 && word.indexOf(tmp) != -1) {
     ans = true;
     break;
    }
  }

  if (ans) console.log("YES");
  else console.log("NO");
});
