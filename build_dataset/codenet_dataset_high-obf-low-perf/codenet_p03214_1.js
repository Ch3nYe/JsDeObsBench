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
	var sum = 0;
	for(var i = 0; i < n; i++){
		sum += as[i];
	}
	var bs = as.map((el,ind,arr)=>abs(sum - n*el));
	var ans = 0;
	var min = bs[0];
	for(var i = 1; i < n; i++){
		if(bs[i] < min){
			min = bs[i];
			ans = i;
		}
	}
	console.log(ans);
}