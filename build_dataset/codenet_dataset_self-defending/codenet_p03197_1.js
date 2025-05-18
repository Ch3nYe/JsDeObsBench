function Main(input) {
	input = input.split("\n").map(Number);
  input.shift();
  var n = arrsum(input);
  if(n==input.length){
  n = 1;
  }
  if(n%2==1){
  console.log("first");
  }else{
  console.log("second");
  }
}Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
function arrsum(arr){
    var sum = 0;
    for (var i=0,len=arr.length; i<len; ++i) {
        sum += arr[i];
    };
    return sum;
}
