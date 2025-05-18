'use strict';
const a0_0x41f7fa = a0_0xe641;
function a0_0xe641(muNhpQ, key) {
    const stringArray = a0_0x5776();
    a0_0xe641 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0xe641(muNhpQ, key);
}
function Main(input) {
    const _0x110016 = a0_0xe641;
    const tmp = input[_0x110016(0x0)]()[_0x110016(0x1)]('\x0a');
    const [H, W, M] = tmp[_0x110016(0x2)]()['split']('\x20')[_0x110016(0x3)](v => Number(v));
    const hw = tmp[_0x110016(0x3)](v => v['split']('\x20')[_0x110016(0x3)](v => Number(v)));
    let result = 0x0;
    for (let i = 0x1; i <= H; i++) {
        const harr = hw[_0x110016(0x4)](v => v[0x0] !== i);
        const hlen = hw[_0x110016(0x5)] - harr[_0x110016(0x5)];
        for (let j = 0x1; j <= W; j++) {
            const warr = harr[_0x110016(0x4)](v => v[0x1] === j);
            if (result < hlen + warr[_0x110016(0x5)]) {
                result = hlen + warr[_0x110016(0x5)];
            }
        }
    }
    console[_0x110016(0x6)](result);
    return;
}
Main(require('fs')[a0_0x41f7fa(0x7)](a0_0x41f7fa(0x8), a0_0x41f7fa(0x9)));
function a0_0x5776() {
    const _0x30df17 = [
        'trim',
        'split',
        'shift',
        'map',
        'filter',
        'length',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x5776 = function () {
        return _0x30df17;
    };
    return a0_0x5776();
}