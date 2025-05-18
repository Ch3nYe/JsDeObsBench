'use strict';

function Main(input) {
    //H W M
    // (hi, wi)
    const tmp = input.trim().split('\n');
    const [H, W, M] = tmp
        .shift()
        .split(' ')
        .map((v) => Number(v));
    const hw = tmp.map((v) => v.split(' ').map((v) => Number(v)));
    // console.log(H, W, M, hw);
    let result = 0;
    for (let i = 1; i <= H; i++) {
        const harr = hw.filter((v) => v[0] !== i);
        const hlen = hw.length - harr.length;
        for (let j = 1; j <= W; j++) {
            const warr = harr.filter((v) => v[1] === j);
            if (result < hlen + warr.length) {
                result = hlen + warr.length;
            }
        }
    }
    console.log(result);
    return;
}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));