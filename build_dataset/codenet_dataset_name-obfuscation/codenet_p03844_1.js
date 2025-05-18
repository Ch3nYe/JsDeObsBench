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
	var s = readLine().split(" ");
	var a = parseInt(s[0]);
	var op = s[1];
	var b = parseInt(s[2]);
	var c;
	
	if (op == "+"){ c = a+b;}
	else {c = a-b;}
	
	console.log(c);
}
