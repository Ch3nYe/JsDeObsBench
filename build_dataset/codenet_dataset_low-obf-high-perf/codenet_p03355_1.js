var toInt = x=>parseInt(x,10);
var toIntArr = arr=>arr.map(x=>toInt(x));
var abs = x=>x>0?x:-x;
function min(){var rest = arguments,val=rest[0];for(var i=1;i<rest.length;i++)if(rest[i]<val)val = rest[i];return val}
function max(){var rest = arguments,val=rest[0];for(var i=1;i<rest.length;i++)if(rest[i]>val)val = rest[i];return val}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
 
function Main(input){
	var input = input.split('\n');
	//input = input.map(e => toIntArr(e.split(' ')));
	var s = input[0];
	var k = toInt(input[1]);
	var l = s.length;
	var arr = [];
	var x;
 
	for(var i = 0; i < l; i++){
		for(var j = i ; j < i+5; j++){
			x = s.slice(i,j+1);
			if(arr.indexOf(x)===-1) arr.push(x);
		}
	}
 
	arr.sort((a,b)=>a<b? -1: 1);
	ans = arr[k-1];
 
	console.log(ans);
}