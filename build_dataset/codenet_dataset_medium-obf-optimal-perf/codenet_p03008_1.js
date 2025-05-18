'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.split('\n')
        // .map(str => str.trim());
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function F(N, A, B) {
	let dp = Array(N+1).fill(0);
	for (let n=0;n<=N;n++){
		let x = n;
		for (let j=0;j<3;j++){
			if (n>=A[j]){
				let y = dp[n-A[j]] + B[j];
				if (x<y){
					x = y;
				}
			}
		}
		dp[n] = x;
	}
	return dp[N];
}

function main() {
    const n = parseInt(readLine(), 10);
    const a = readLine().split(' ').map(_ => parseInt(_, 10));
    const b = readLine().split(' ').map(_ => parseInt(_, 10));
    let n1 = F(n, a, b);
    let n2 = F(n1, b, a);
	console.log(n2);
}
