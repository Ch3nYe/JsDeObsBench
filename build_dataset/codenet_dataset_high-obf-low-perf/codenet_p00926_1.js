var n, m;
var x = [];

function main(){
	n = scan();
	m = scan();
	rep(n, function(i){
		x[i] = 0;
	});
	rep(m, function(i){
		var c = scan();
		var d = scan();
		x[c] += 1;
		x[d] -= 1;
	});
	rep(1, n, function(i){
		x[i] += x[i - 1];
	});
	var c = 0;
	rep(n, function(i){
		if(x[i] > 0){
			++c;
		}
	});
	print(c * 2 + n + 1);
}

function rep(a, b, c){
	if(c === undefined){
		c = b;
		b = a;
		a = 0;
	}
	for(var i = a; i < b; ++i){
		if(c(i) === false){
			break;
		}
	}
}

var input = '';

function scan(){
	return +input.pop();
}
function scan_string(){
	return input.pop();
} 
function print(val){
	console.log(val);
}
 
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk){
	input += chunk;
});
process.stdin.on('end', function(){
	input = input.trim().split(/\s+/).reverse();
	main();
});