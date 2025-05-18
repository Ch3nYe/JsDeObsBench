function main(){
	while(1){
		var n = scan();
		if(n == 0){
			break;
		}
		var x = Array(n);
		rep(n, function(i){
			x[i] = scan();
		});
		x[-1] = 0;
		rep(n, function(i){
			x[i] += x[i - 1];
		});
		var a = -Infinity;
		rep(n, function(i){
			for(var j = i; j < n; ++j){
				a = Math.max(x[j] - x[i - 1], a);
			}
		});
		print(a);
	}
}

function rep(n, func){
	for(var i = 0; i < n; ++i){
		func(i);
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
	input = input.split(/\s+/);
	main();
});