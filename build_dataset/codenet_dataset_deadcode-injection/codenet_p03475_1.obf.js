'use strict';
const a0_0x55cf90 = a0_0x1509;
function a0_0x1509(waJMaw, key) {
    const stringArray = a0_0x5aa9();
    a0_0x1509 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1509(waJMaw, key);
}
function a0_0x5aa9() {
    const _0x3baf3d = [
        'split',
        'shift',
        'map',
        'length',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x5aa9 = function () {
        return _0x3baf3d;
    };
    return a0_0x5aa9();
}
function main(input) {
    const _0x16aa00 = a0_0x1509;
    input = input[_0x16aa00(0x0)](/\n/);
    const n = ~~input[_0x16aa00(0x1)]();
    input = input['map'](v => v[_0x16aa00(0x0)](/\s/)[_0x16aa00(0x2)](x => ~~x));
    let ans = '';
    for (let i = 0x0; i < input[_0x16aa00(0x3)]; i++) {
        let time = 0x0;
        let wait = 0x0;
        for (let j = i; j < input[_0x16aa00(0x3)]; j++) {
            time += time > input[j][0x1] ? 0x0 : input[j][0x1] - time;
            time += input[j][0x0];
        }
        ans += time + '\x0a';
    }
    ans += '0\x0a';
    console[_0x16aa00(0x4)](ans);
}
main(require('fs')[a0_0x55cf90(0x5)](a0_0x55cf90(0x6), a0_0x55cf90(0x7)));