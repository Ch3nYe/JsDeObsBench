'use strict';
const a0_0x568987 = a0_0x58f7;
function a0_0x34cf() {
    const _0x1dbfd5 = [
        'trim',
        'YES',
        'slice',
        'indexOf',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x34cf = function () {
        return _0x1dbfd5;
    };
    return a0_0x34cf();
}
function a0_0x58f7(yYJjUF, key) {
    const stringArray = a0_0x34cf();
    a0_0x58f7 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x58f7(yYJjUF, key);
}
function Main(input) {
    const _0x7c3a37 = a0_0x58f7;
    input = input[_0x7c3a37(0x0)]()['split']('\x0a');
    const N = Number(input[0x0]['trim']());
    const A = input[0x1][_0x7c3a37(0x0)]()['split']('\x20')['map'](Number);
    let ret = _0x7c3a37(0x1);
    for (let i = 0x0; i < N; i++) {
        let tmp = A[_0x7c3a37(0x2)](i + 0x1);
        let r = tmp[_0x7c3a37(0x3)](A[i]);
        if (r !== -0x1) {
            ret = 'NO';
            break;
        }
    }
    console[_0x7c3a37(0x4)](ret);
}
Main(require('fs')['readFileSync'](a0_0x568987(0x5), a0_0x568987(0x6)));