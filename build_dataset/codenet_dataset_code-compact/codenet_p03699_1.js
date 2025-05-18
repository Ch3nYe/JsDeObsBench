function Main(input) {
	input = input.trim().split("\n").map((input)=>Number(input));
  var len = input[0];
  input.shift();
  input.sort(function(a,b){
  	return a - b;
  });
  var sum = 0;
  for(var i = 0; i < input.length; i++){
    sum += input[i];
  }
  var count = 0;
  while(sum % 10 == 0 && sum != 0){
     sum -= input[count];
    count++;
  }
  console.log(sum);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
