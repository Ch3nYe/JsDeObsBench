"use strict"
// input data
function main(input) {
    const n = Number(input.split('\n')[0].split(' ')[0]);
    const m = Number(input.split('\n')[0].split(' ')[1]);
    let a = [];
    let sum = 0;
    for (let index = 0; index < n; index++) {
        a[index] = input.split('\n')[1].split(' ')[index];
        sum += Number(a[index]);
    }
    let count = 0;
    for (let index = 0; index < n; index++) {
        if (a[index] * (4 * m) - sum > 0) {
            count++;
        }
    }
    if (count>=m) {
        console.log('Yes');
    }else {
        console.log('No');
    }
}

// output
main(require('fs').readFileSync('/dev/stdin', 'utf8'));