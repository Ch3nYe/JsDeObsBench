var n;
var x = [];

function main(){
	while(n = scan()){
		rep(n, function(i){
			x[i] = [scan(), scan()];
		});
		x.sort(function(a, b){
			return a[1] - b[1];
		});
		//print(x);
		var ans = true;
		var w = 0;
		rep(n, function(i){
			w += x[i][0];
			ans = w <= x[i][1] && ans;
		});
		print(ans ? "Yes" : "No");
	}
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
 
process.stdin.resume();
process.stdin.setEncoding('utf8');
 
var input = '';
var input_index = 0;
 
function scan(type){
	if(type === 'string'){
		return input[input_index++];
	}
	else{
		return +input[input_index++];
	}
}
 
function print(val){
	console.log(val);
}
 
process.stdin.on('data', function(chunk){
	input += chunk;
});
process.stdin.on('end', function(){
	input = input.trim().split(/\s+/);
	main();
});