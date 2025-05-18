function toNum(str) {
	return parseInt(str, 10);
}

// 最大公約数
function gcd(a, b) {
	if (a % b === 0) {
		return b;
	} else {
		return gcd(b, a % b);
	}
}

// 最小公倍数
function lcm(a, b) {
	return a * b / gcd(a, b);
}

// inputに入力データ全体が入る
function Main(input) {
	var N = toNum(input.split('\n')[0].split(' ')[0]);
	var M = toNum(input.split('\n')[0].split(' ')[1]);
	var S = input.split('\n')[1];
	var T = input.split('\n')[2];
	var L = lcm(N, M);
	var flag = true;
	var X = [];
	for ( var i = 0; i < L; i++) {
		X.push('');
	}
	X[0] = S[0];
	for ( var i = 1; i < S.length; i++ ) {
		X[i * (L / N)] = S[i];
	}
	if ( X[0] != T[0] ) {
		console.log('-1');
	} else {
		for (var i = 1; i < T.length; i++) {
			if (X[i * (L / M)] != '' && X[i * (L / M)] != T[i]) {
				console.log('-1');
				flag = false;
				break;
			}
		}
	}
	if ( flag ) {
		console.log(L);
	}
}

// ※この行以降は編集しない (標準入力から一度に読み込みMainを呼び出します)
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
