'use strict';
const a0_0xe36ae0 = a0_0x5a11;
function a0_0x5a11(eySyNS, key) {
    const stringArray = a0_0x5598();
    a0_0x5a11 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5a11(eySyNS, key);
}
const Main = input => {
    const _0x503c7c = a0_0x5a11;
    let xs = input['trim']()['split']('\x0a');
    let N = Number(xs[0x0]);
    let A = Number(xs[0x1][_0x503c7c(0x0)]('\x20')[0x0]);
    let B = Number(xs[0x1]['split']('\x20')[0x1]);
    let P1 = [];
    let P2 = [];
    let P3 = [];
    let P = xs[0x2]['split']('\x20')[_0x503c7c(0x1)](v => parseInt(v, 0xa));
    for (let i = 0x0; i < N; i++) {
        if (P[i] <= A) {
            P1[_0x503c7c(0x2)](P[i]);
        } else if (P[i] <= B) {
            P2[_0x503c7c(0x2)](P[i]);
        } else {
            P3[_0x503c7c(0x2)](P[i]);
        }
    }
    let ans = Math[_0x503c7c(0x3)](P1[_0x503c7c(0x4)], P2[_0x503c7c(0x4)], P3['length']);
    console[_0x503c7c(0x5)](ans);
};
Main(require('fs')[a0_0xe36ae0(0x6)]('/dev/stdin', 'utf8'));
function a0_0x5598() {
    const _0x3b5723 = [
        'split',
        'map',
        'push',
        'min',
        'length',
        'log',
        'readFileSync'
    ];
    a0_0x5598 = function () {
        return _0x3b5723;
    };
    return a0_0x5598();
}