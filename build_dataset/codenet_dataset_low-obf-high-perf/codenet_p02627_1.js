function main(input){
	input=input.split("\n");
var answer=input[0];
var answerA=input[0].toUpperCase();

if(answer==answerA){console.log("A")}else{console.log("a")}

}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
