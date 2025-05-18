function Main(input) {
    var args = input.trim().split(' ').map(Number);
    var nums = args[1] * 2
    var ans = 0;
    if(nums <= args[0]) {
      ans = args[0] - nums;
    }
    console.log(ans);
 }
 
/* var input = `12 11`;
Main(input);
 */ 
Main(require("fs").readFileSync("/dev/stdin", "utf8"));