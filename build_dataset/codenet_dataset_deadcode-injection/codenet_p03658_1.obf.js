'use strict';
function a0_0x464e(vQFrGY, key) {
    const stringArray = a0_0x43bc();
    a0_0x464e = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x464e(vQFrGY, key);
}
const a0_0x2668b7 = a0_0x464e;
const Main = input => {
    const _0x58d54a = a0_0x464e;
    let xs = input['trim']()[_0x58d54a(0x0)]('\x0a');
    let N = Number(xs[0x0]['split']('\x20')[0x0]);
    let K = Number(xs[0x0][_0x58d54a(0x0)]('\x20')[0x1]);
    let l = [];
    for (let i = 0x0; i < N; i++) {
        l[_0x58d54a(0x1)](xs[0x1]['split']('\x20')[i]);
    }
    const compare = (b, a) => {
        return a - b;
    };
    l[_0x58d54a(0x2)](compare);
    let ans = 0x0;
    for (let i = 0x0; i < K; i++) {
        ans += Number(l[i]);
    }
    console['log'](ans);
};
Main(require('fs')[a0_0x2668b7(0x3)](a0_0x2668b7(0x4), a0_0x2668b7(0x5)));
function a0_0x43bc() {
    const _0x54699b = [
        'split',
        'push',
        'sort',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x43bc = function () {
        return _0x54699b;
    };
    return a0_0x43bc();
}