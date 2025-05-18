process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.on('SIGINT', function(){
    input_stdin_array = input_stdin.split("\n");
    main();
    process.exit();
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
	var N = parseInt(readLine());
	var s = readLine().split(" ");
	var T = [0];
	var sum=0;
	for (var i=1; i <= N; i++){
		T.push(parseInt(s[i-1]));
		sum += T[i];
	}
	var M = parseInt(readLine());
	for (var k=0; k < M; k++){
		s = readLine().split(" ");
		var i = parseInt(s[0]);
		var x = parseInt(s[1]);
		console.log(sum - T[i] + x);
	}
}
