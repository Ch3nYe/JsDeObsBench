'use strict';

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var minvs = input.trim().split('\n');
//var minvs = ['25.4','21.4','36.3'];
var minv;
while (minv = minvs.shift()) {
	var floor = Math.ceil(Math.pow(parseFloat(minv), 2)/98 + 1);
	console.log(floor);
}