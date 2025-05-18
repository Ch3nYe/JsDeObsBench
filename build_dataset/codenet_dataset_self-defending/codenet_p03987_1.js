'use strict';

const lines = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const N = +lines[0];
const A = lines[1].split(' ');

let indices = [];
for (let i = 0; i < N; i++) {
	A[i] = +A[i];
	indices[indices.length] = i;
}

indices = indices.sort((a, b) => A[a] - A[b]);

let sum = 0,
	que = [[0, N - 1, 0]];

while (que.length > 0) {
	let lri = que.shift(),
		left = lri[0],
		right = lri[1],
		index = lri[2];
	
	if (left > right) continue;
	
	let i = index;
	while (indices[i] < left || indices[i] > right) i++;
	let ind = indices[i];
	
	sum += A[ind] * (ind - left + 1) * (right - ind + 1);
	if (left <= ind - 1) que[que.length] = [left, ind - 1, i + 1];
	if (ind + 1 <= right) que[que.length] = [ind + 1, right, i + 1];
}

console.log(sum);