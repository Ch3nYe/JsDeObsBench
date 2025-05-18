var toInt = x=>parseInt(x,10);
var toIntArr = arr=>arr.map(x=>toInt(x));
var abs = x=>x>0?x:-x;
function min(){var rest = arguments,val=rest[0];for(var i=1;i<rest.length;i++)if(rest[i]<val)val = rest[i];return val}
function max(){var rest = arguments,val=rest[0];for(var i=1;i<rest.length;i++)if(rest[i]>val)val = rest[i];return val}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
 
function Main(input){
	var input = input.split('\n');
	var temp1 = input[0].split(' ');
	var n = toInt(temp1[0]);
	var m = toInt(temp1[1]);
	var abs = [];
	for(var i = 0; i < m; i++){
		c = toIntArr(input[i+1].split(' '));
		a = c[0];
		b = c[1];
		abs[i] = [a,b];
	}
	abs.sort(function(a,b){
		if(a[0]!==b[0]){
			return a[0] - b[0];
		}else{
			return a[1] - b[1];
		}
	})
	var l=0;r=n-1;
	var ab;
	var ans = 1;
	for(var i = 0; i < m; i++){
		ab = abs[i];
		if(ab[1]<=l || r<=ab[0]){
			ans++;
			l = ab[0];
			r = ab[1];
		}else{
			l = max(l,ab[0]);
			r = min(r,ab[1]);
		}
	}
	console.log(ans);
}