'use strict';
const a0_0x57b21c = a0_0x45e1;
function a0_0x45e1(AaTJxl, key) {
    const stringArray = a0_0x2e94();
    a0_0x45e1 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x45e1(AaTJxl, key);
}
function a0_0x2e94() {
    const _0x130c17 = [
        'trim',
        'split',
        'map',
        'tVEiy',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2e94 = function () {
        return _0x130c17;
    };
    return a0_0x2e94();
}
const main = arg => {
    const _0x343bc0 = a0_0x45e1;
    const input = arg[_0x343bc0(0x0)]()[_0x343bc0(0x1)]('\x0a');
    let N = Number(input[0x0][_0x343bc0(0x1)]('\x20')[0x0]);
    let x = Number(input[0x0][_0x343bc0(0x1)]('\x20')[0x1]);
    let As = input[0x1]['split']('\x20')[_0x343bc0(0x2)](n => Number(n));
    let manip = 0x0;
    for (let i = 0x0; i < N; i++) {
        let exceed = As[i] - x;
        if (exceed > 0x0) {
            As[i] = x;
            manip += exceed;
        }
    }
    for (let i = 0x1; i < N - 0x1; i++) {
        let left = As[i - 0x1];
        let current = As[i];
        let right = As[i + 0x1];
        if (left + current > x && current + right > x) {
            if (_0x343bc0(0x3) !== _0x343bc0(0x3)) {
                As[i] = x - left;
                manip += current - (x - left);
            } else {
                As[i] = x - left;
                manip += current - (x - left);
            }
        }
    }
    for (let i = 0x0; i < N - 0x1; i++) {
        let current = As[i];
        let right = As[i + 0x1];
        if (current + right > x) {
            As[i] = x - right;
            manip += current - (x - right);
        }
    }
    console[_0x343bc0(0x4)](manip);
};
main(require('fs')[a0_0x57b21c(0x5)](a0_0x57b21c(0x6), a0_0x57b21c(0x7)));