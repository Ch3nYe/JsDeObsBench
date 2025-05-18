function myout(text){console.log(text);}//standard output
function Main(input) {
	input = parseInt(input.trim());
	//input = input.trim().split(" ");
	//input = input.trim().split("\n");
	//input = input.trim().split(" ").map((a)=>Number(a));
	//input = input.trim().split("\n").map((a)=>Number(a));
  var check = [000,111,222,333,444,555,666,777,888,999];
  for(var i = 0; i < check.length - 1; i++){
    if(check[i] < input && check[i + 1] > input){
       myout(check[i + 1]);
      return;
       }else if(check[i] == input){
             myout(check[i]);
      return;   
                }
  }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
