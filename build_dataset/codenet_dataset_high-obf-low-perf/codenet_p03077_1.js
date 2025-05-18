"use strict";
function main(input) {
    const args = input.split('\n');

    const N = parseInt(args[0]);
    const A = parseInt(args[1]);
    const B = parseInt(args[2]);
    const C = parseInt(args[3]);
    const D = parseInt(args[4]);
    const E = parseInt(args[5]);

    const station = [A, B, C, D, E];
    let max_traf = Math.min(...station);
    console.log(Math.ceil(N / max_traf) + 4);

}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
