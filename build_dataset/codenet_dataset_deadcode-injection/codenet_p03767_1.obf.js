'use strict';
function a0_0x1da3(ONSiOK, key) {
    const stringArray = a0_0x358c();
    a0_0x1da3 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1da3(ONSiOK, key);
}
function a0_0x358c() {
    const _0xf80f82 = [
        'trim',
        'split',
        'map',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x358c = function () {
        return _0xf80f82;
    };
    return a0_0x358c();
}
const a0_0x167a26 = a0_0x1da3;
function Main(input) {
    const _0x3893c5 = a0_0x1da3;
    const params = input['trim']()['split']('\x0a');
    const N = Number(params[0x0][_0x3893c5(0x0)]());
    const sortedA = params[0x1][_0x3893c5(0x0)]()[_0x3893c5(0x1)]('\x20')[_0x3893c5(0x2)](Number)['sort']((a, b) => b - a);
    let total = 0x0;
    for (let i = 0x0; i < N; i++) {
        total += sortedA[i * 0x2 + 0x1];
    }
    console[_0x3893c5(0x3)](total);
}
Main(require('fs')[a0_0x167a26(0x4)](a0_0x167a26(0x5), 'utf8'));