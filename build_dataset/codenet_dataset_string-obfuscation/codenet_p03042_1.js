function Main(input) {
	var a = parseInt(input.charAt(0)+input.charAt(1));
	var b = parseInt(input.charAt(2)+input.charAt(3));
	var r = 0;	// 1=YYMM、2=MMYY、3=両方、4=どちらでもない
	if(a >= 13 || a == 0){
		r = 1;
	}
	if(b >= 13 || b == 0){
		r = 2;
	}
	if(a >= 1 && a <= 12 && b >= 1 && b <= 12){
		r = 3;
	}
	if(a >= 13 && b >= 13 || a >= 13 && b == 0 || a == 0 && b >= 13 || a == 0 && b == 0){
		r = 4;
	}
	if(r == 1){ console.log("YYMM"); }
	if(r == 2){ console.log("MMYY"); }
	if(r == 3){ console.log("AMBIGUOUS"); }
	if(r == 4){ console.log("NA"); }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));