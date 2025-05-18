'use strict';
const a0_0x734cf5 = a0_0x182b;
function a0_0x182b(wFfZLt, key) {
    const stringArray = a0_0x48f4();
    a0_0x182b = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x182b(wFfZLt, key);
}
function a0_0x48f4() {
    const _0x14b842 = [
        'split',
        'sort',
        'Yes',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x48f4 = function () {
        return _0x14b842;
    };
    return a0_0x48f4();
}
function main(input) {
    const _0xb34fbb = a0_0x182b;
    const lines = input[_0xb34fbb(0x0)]('\x0a');
    const N = parseInt(lines['shift']());
    const tasks = [];
    for (let i = 0x0; i < N; i++) {
        tasks['push'](lines[i][_0xb34fbb(0x0)]('\x20')['map'](x => parseInt(x)));
    }
    tasks[_0xb34fbb(0x1)]((a, b) => a[0x1] - b[0x1]);
    let result = _0xb34fbb(0x2);
    let sum = 0x0;
    for (let i = 0x0; i < N; i++) {
        sum += tasks[i][0x0];
        if (sum > tasks[i][0x1]) {
            result = 'No';
            break;
        }
    }
    console[_0xb34fbb(0x3)](result);
}
main(require('fs')['readFileSync'](a0_0x734cf5(0x4), a0_0x734cf5(0x5)));