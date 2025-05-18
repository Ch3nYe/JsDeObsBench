function Main(input) {
	const S = parseInt(input);
	const MOD = 1e9 + 7;
	var upr = 0, i = 1;
	do{
		if(S <= Math.pow(10, i - 1) * 9 * i)upr = i;
		i++;
	}while(!upr)
	
	i = Math.floor(S / upr);
	var ans = 0;
	var l = Math.pow(10, upr - 1), r = l + i - 1;
	var flr = i * f(l);
	do{
		if(S % i)ans++;
		else ans += powmod(10, S / i - 1, MOD) * 9 - i + 1;
	}while(--i)
	
	while(--l){
		flr += f(l);
		if(flr > S)flr -= f(r--);
		if(flr === S)ans++;
	}
	
	console.log((ans + MOD) % MOD);
}

function powmod(a, b, c){//a^b%c
	const N = 1e4;//オーバーフロー防止
	var rt = 1;
	while(b){
		if(b & 1) rt = (Math.floor(a / N) * rt % c * N + a % N * rt) % c;
		a = (Math.floor(a / N) * a % c * N + a % N * a) % c
		b >>>= 1;
	}
	return rt;
}

function f(n){
	if(n < 10)return 1;
	if(n < 100)return 2;
	if(n < 1000)return 3;
	if(n < 10000)return 4;
	if(n < 100000)return 5;
	if(n < 1000000)return 6;
	if(n < 10000000)return 7;
	return 8;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));