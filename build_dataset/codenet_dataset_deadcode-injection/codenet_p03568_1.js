function Main(input){
    input = input.split("\n");
  var n = Math.pow(3,input[0]);
  var sum = 1;
  var arr = input[1].split(" ").map(Number);
  arr.forEach(function(val){if(val%2==0)sum *= 2});
  console.log(n-sum);
}Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());