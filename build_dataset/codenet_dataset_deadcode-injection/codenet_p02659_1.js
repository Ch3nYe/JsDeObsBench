function Main(input) {
  input = input.split("\n");
  var A = Number(input[0].split(" ")[0]);
  var B = Number(input[0].split(" ")[1]);
  var ans = BigInt(Math.floor(A * B));
  var ans = ans.toString();


  console.log('%s', ans);
  return ans;
}

function debug(n){
  var input = document.getElementById("input"+n).value;
  var ans=Main(input);
  var result="WA";
  if(ans==document.getElementById("output"+n).value.split("\n")[0]){
    result="AC";
  }
  document.getElementById("result"+n).innerHTML=result;
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
