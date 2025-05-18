function Main(input) {
  var cnt = 0;
  for(var i=0; i<input.length; i++){
  	if(parseInt(input[i])!=i%2)cnt++;
  }
  console.log(parseInt(Math.min(cnt, input.length-cnt)));
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));