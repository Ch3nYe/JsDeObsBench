'use strict';
function a0_0x2c68(nwybRM, key) {
    const stringArray = a0_0x1fe2();
    a0_0x2c68 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2c68(nwybRM, key);
}
const a0_0x4519b2 = a0_0x2c68;
const main = arg => {
    const _0x31ddb5 = a0_0x2c68;
    arg = arg[_0x31ddb5(0x0)]()['split']('\x0a');
    const D = parseInt(arg[0x0][_0x31ddb5(0x1)]('\x20')[0x0]);
    const N = parseInt(arg[0x0]['split']('\x20')[0x1]);
    let temp = [...Array(D * 0x2)][_0x31ddb5(0x2)](0x0);
    let answer = parseInt(N + String(temp[_0x31ddb5(0x3)]('')));
    let plus = parseInt(0x1 + String(temp[_0x31ddb5(0x3)]('')));
    console[_0x31ddb5(0x4)](N !== 0x64 ? answer : answer + plus);
};
function a0_0x1fe2() {
    const _0x3da524 = [
        'trim',
        'split',
        'fill',
        'join',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x1fe2 = function () {
        return _0x3da524;
    };
    return a0_0x1fe2();
}
main(require('fs')[a0_0x4519b2(0x5)]('/dev/stdin', a0_0x4519b2(0x6)));