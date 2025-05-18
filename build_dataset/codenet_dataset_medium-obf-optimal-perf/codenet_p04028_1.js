var mod = 1e9+7;
function Main(s) {
  var n = parseInt(s[0]);
  var sl = s[1].length;
  var a = Array(2).fill(0).map(a => Array(n+2).fill(0));
  a[0][0] = 1;
  for(var i = 1; i <= n; i++){
    a[i&1][0] = a[(i+1)&1][0] + a[(i+1)&1][1];
    a[i&1][0] %= mod;
    for(var j = 1; j <= i; j++){
      a[i&1][j] = a[(i+1)&1][j-1] * 2 + a[(i+1)&1][j+1];
      a[i&1][j] %= mod;
    }
  }
  console.log(permod(a[n&1][sl], powmod(2, sl)));
}
function abmod(){
	var rt = arguments[0];
	for(var i = 1; i < arguments.length; i++){
		rt = (rt >>> 16) * arguments[i] % mod * 0x10000 + (rt & 0xFFFF) * arguments[i];
		rt %= mod;
	}
	return rt;
}
function powmod(a,n){//a^n%mod
	var rt = 1;
	while(n){
		if(n & 1) rt = abmod(a, rt);
		a = abmod(a, a);
		n >>>= 1;
	}
	return rt;
}
function permod(a,n){
	var rt = powmod(n, mod-2);
	rt = abmod(rt, a);
	return rt;
}
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));