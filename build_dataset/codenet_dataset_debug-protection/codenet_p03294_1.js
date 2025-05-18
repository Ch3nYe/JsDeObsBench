var toInt = x=>parseInt(x,10);
var toIntArr = arr=>arr.map(x=>toInt(x));
var abs = x=>x>0?x:-x;
function min(){var rest = arguments,val=rest[0];for(var i=1;i<rest.length;i++)if(rest[i]<val)val = rest[i];return val}
function max(){var rest = arguments,val=rest[0];for(var i=1;i<rest.length;i++)if(rest[i]>val)val = rest[i];return val}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
 
function Main(input){
	var input = input.split('\n');
	var n = toInt(input[0]);
	var as = toIntArr(input[1].split(' '));
	as.length = n;
	var ans = -n;
	for(var i = 0; i < n; i++){
		ans += as[i];
	}
	console.log(ans);	
}