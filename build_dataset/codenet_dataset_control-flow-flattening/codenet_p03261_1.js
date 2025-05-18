"use strict";
const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
let ws = new Set();
let prev = null;
console.log((() => {
	for (const w of input.slice(1,parseInt(input[0]) + 1)) {
		if (prev && prev != w[0]) {
			return "No";
		}
		if (ws.has(w)) {
			return "No";
		}
		ws.add(w);
		prev = w.substr(-1);
	}
	return "Yes";
})());
