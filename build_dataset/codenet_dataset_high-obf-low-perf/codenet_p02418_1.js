const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const arr = input.split('\n');
const regExp = new RegExp(arr[1]);
console.log(regExp.test(arr[0] + arr[0])?'Yes':'No');
