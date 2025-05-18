'use strict';
const a0_0x439822 = a0_0x3cdd;
function main(input) {
    const _0x1d7814 = a0_0x3cdd;
    input = input[_0x1d7814(0x0)]()[_0x1d7814(0x1)]('\x0a');
    let ABC = input['shift']()['split']('\x20')[_0x1d7814(0x2)](v => Number(v));
    const N = ABC[_0x1d7814(0x3)]();
    input = input[_0x1d7814(0x2)](v => Number(v))[_0x1d7814(0x4)]((a, b) => b - a);
    const INF = Math['pow'](0xa, 0x9);
    const dfs = (cur, a, b, c) => {
        const _0x4b7077 = a0_0x3cdd;
        if (cur === N) {
            if (Math[_0x4b7077(0x5)](a, b, c) > 0x0) {
                return Math[_0x4b7077(0x6)](a - ABC[0x0]) + Math[_0x4b7077(0x6)](b - ABC[0x1]) + Math['abs'](c - ABC[0x2]) - 0x1e;
            }
            return INF;
        }
        return Math['min'](dfs(cur + 0x1, a, b, c), dfs(cur + 0x1, a + input[cur], b, c) + 0xa, dfs(cur + 0x1, a, b + input[cur], c) + 0xa, dfs(cur + 0x1, a, b, c + input[cur]) + 0xa);
    };
    console[_0x1d7814(0x7)](dfs(0x0, 0x0, 0x0, 0x0));
}
main(require('fs')[a0_0x439822(0x8)](a0_0x439822(0x9), 'utf8'));
function a0_0x3cdd(QtRTFf, key) {
    const stringArray = a0_0x39ff();
    a0_0x3cdd = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3cdd(QtRTFf, key);
}
function a0_0x39ff() {
    const _0x1b9a32 = [
        'trim',
        'split',
        'map',
        'shift',
        'sort',
        'min',
        'abs',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x39ff = function () {
        return _0x1b9a32;
    };
    return a0_0x39ff();
}