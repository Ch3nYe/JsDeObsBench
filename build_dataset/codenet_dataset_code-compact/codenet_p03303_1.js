function myout(text){console.log(text);}//standard output
function Main(input) {
	//input = parseInt(input);
	//input = input.split(" ");
	input = input.split("\n");
	//input = input.split(" ").map((a)=>Number(a));
	//input = input.split("\n").map((a)=>Number(a));
  var S = input[0];
  var w = parseInt(input[1]);
  if(w == 1){
     myout(S);
    return;
     }
  S = S.split("");
  var list = [];
  while(S.length != 0){
    	var tmp = "";
        for(var i = 0; i < w; i++){
          if(S.length != 0){
          	tmp += S.shift();
          }
        }
    list.push(tmp);
  }
  var output = "";
  for(var i = 0; i < list.length; i++){
    output += list[i].slice(0,1);
  }
  myout(output);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
