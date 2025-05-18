function myout(text){console.log(text);}//standard output
function Main(input) {
	//input = parseInt(input);
	//input = input.trim().split(" ");
	//input = input.trim().split("\n");
	//input = input.trim().split(" ").map((a)=>Number(a));
	input = input.trim().split("\n").map((a)=>Number(a));
  var len = input[0];
  var output = 0;
  input.shift();
  for(var i = 0; i < len; i++){
    if(i == len - 1){
       output += Math.floor(input[i] / 2);
    }else{
      if(input[i] != 0){
         if(input[i+1] != 0){
         	var tmp = Math.min(input[i],input[i+1]); 
           output += tmp;
           input[i] -= tmp;
           input[i+1] -= tmp;
           if(input[i] >= 2){
              output += Math.floor(input[i] / 2);
              }
         }else{
            output += Math.floor(input[i] / 2);
         }
      }
    }
  }
  myout(output);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
