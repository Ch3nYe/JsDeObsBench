function Main(input) {
  input = input.trim()
  input = input.split("\n");
  var A = input[0].split("");
  var B = input[1].split("");
  if(A[0]==B[2]&&A[1]==B[1]&&A[2]==B[0]) console.log("YES")
  else console.log("NO")
}Main(require("fs").readFileSync("/dev/stdin", "utf8"));