function Main(input) {
	input = input.split(" ");
	ans = (input[0]/input[1]);
  num =0;
var a = Number.isInteger(ans);
if(a===true){ans=-1;}else{
while(true){
num++;
cal = ((input[0]*num)/input[1])
var b = Number.isInteger(cal)
  if(b===true){ans=(input[0]*(num-1));break;}
  if(input[0]>Math.pow(10,9)|input[1]>Math.pow(10,9)|(input[0]*(num-1))>Math.pow(10,18)){
  ans=-1;break;
  }
}
}
  console.log(ans)
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));