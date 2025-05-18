var toInt = x=>parseInt(x,10);
var toIntArr = arr=>arr.map(x=>toInt(x));
var abs = x=>x>0?x:-x;
function min(){var rest=arguments,v=rest[0];for(var i=1;i<rest.length;i++)if(rest[i]<v)v=rest[i];return v}
function max(){var rest=arguments,v=rest[0];for(var i=1;i<rest.length;i++)if(rest[i]>v)v=rest[i];return v}
function gcd(){var rest=arguments,v=rest[0],temp=(a,b)=>b?temp(b,a%b):a;for(var i=1;i<rest.length;i++)v=temp(v,rest[i]);return v}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
 
function Main(input){
	var input = input.split('\n');
	var n = toInt(input[0]);
	var ta = toIntArr(input[1].split(' '));
	var hs = toIntArr(input[2].split(' '));
	var t = ta[0];
	var a = ta[1];

	var ans = 1;
	var x =abs(t-a-0.006*hs[0]) ,y;
	for(var i = 1; i < n; i++){
		y = abs(t-a-0.006*hs[i]);
		//console.log(i,x,y)
		if(y<x){
			ans = i+1;
			x = y;
		}
	}

	console.log(ans);

}

