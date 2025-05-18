function rec(a, b) {
	if (a[0] > b[0]) {return 'GREATER';}
	else if (a[0] < b[0]) {return 'LESS';}
	else if (a.length == 1) {return 'EQUAL'}
	else {return rec(a.slice(1), b.slice(1));}
}

function main(s) {
	s = s.split('\n');
	if (s[0].length > s[1].length) {console.log('GREATER');}
	else if (s[0].length < s[1].length) {console.log('LESS');}
	else {console.log('%s', rec(s[0].slice(1), s[1].slice(1)));}
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

