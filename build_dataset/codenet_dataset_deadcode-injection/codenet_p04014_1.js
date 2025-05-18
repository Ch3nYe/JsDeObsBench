function Main(s) {
	s = s.split("\n").map(a => parseInt(a));
	const n = s[0];
	s = s[1];
	const sn = Math.ceil(Math.sqrt(n));
	if(s === n){console.log(n+1);return;}
	for(var b = 2; b < sn; b++){
		if(s === f(b, n)){
          console.log(b);
          return;
        }
	}
	var p = Math.floor((n - s) / (sn - 1));
	for(; p > 0; p--){
		b = Math.floor((n - s) / p + 1);
		if(s === f(b, n)){
          console.log(b);
          return;
        }
	}
	
	console.log(-1);
}
function f(b, n){
	if(n < b) return n;
	return f(b, Math.floor(n / b)) + n % b;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());