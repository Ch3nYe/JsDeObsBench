var toInt = x=>parseInt(x,10);
var toIntArr = arr=>arr.map(x=>toInt(x));
var abs = x=>x>0?x:-x;
function min(){var rest = arguments,val=rest[0];for(var i=1;i<rest.length;i++)if(rest[i]<val)val = rest[i];return val}
function max(){var rest = arguments,val=rest[0];for(var i=1;i<rest.length;i++)if(rest[i]>val)val = rest[i];return val}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
 
function Main(input){
	var input = input.split('\n');
	var temp = toIntArr(input[0].split(' '));
	var n = temp[0];
	var x = temp[1];
	var xs = toIntArr(input[1].split(' '));
	var ss = [xs[0]];

	for(var i = 1; i < n; i++){
		ss[i] = xs[i] + ss[i-1];
	}
	var ans = (n+1)*x;

	var has = 0;
	for(var i = n-1; i > -1; i--){
		has++;
		if(has>2 && x < ss[i]*(has-1)*2 - xs[i]*2){
			has = 1;
			ans += x;
		}
		ans += xs[i]*(max(has,2)*2 + 1);
	}
	
	console.log(ans);

}