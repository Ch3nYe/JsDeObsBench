"use strict";
main(require("fs").readFileSync("/dev/stdin", "utf8").replace(/\r?\n$/, "").split(/\r?\n/));

function main(lines){
	var str = lines.shift();
	lines.shift();
	var code;
	while(code = lines.shift()){
		code = code.split(" ");
		var from = +code[1], to = +code[2];
		switch(code[0]){
			case "print":
				console.log(str.slice(from, to+1));
				break;
			case "replace":
				str = str.slice(0, from) + code[3] + str.slice(to+1);
				break;
			case "reverse":
				str = str.slice(0, from) + str.slice(from, to+1).split("").reverse().join("") + str.slice(to+1);
				break;
		}
	}
}