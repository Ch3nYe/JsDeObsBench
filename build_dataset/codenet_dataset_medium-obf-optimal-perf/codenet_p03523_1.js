'use strict'
let input = require("fs").readFileSync("/dev/stdin", "utf8");
input = input.trim();
let ans = "YES";

if(input[0] == "A"){
  input = input.slice(1);
}

if(input[0] == "K"){
  input = input.slice(1);
}

if(input[0] == "I"){
  input = input.slice(1);
}

if(input[0] == "H"){
  input = input.slice(1);
}

if(input[0] == "A"){
  input = input.slice(1);
}

if(input[0] == "B"){
  input = input.slice(1);
}

if(input[0] == "A"){
  input = input.slice(1);
}

if(input[0] == "R"){
  input = input.slice(1);
}

if(input[0] == "A"){
  input = input.slice(1);
}

input == "" ? ans = "YES" : ans = "NO";

console.log(ans);
