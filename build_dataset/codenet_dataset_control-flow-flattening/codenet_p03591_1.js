function Main(input) {
	if(input.substr(0,4)=="YAKI"){
		console.log("Yes")
	}else{
		console.log("No")
	}
}Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());