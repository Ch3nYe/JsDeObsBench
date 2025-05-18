'use strict';
function a0_0x183e() {
    const _0x5b9903 = [
        'split',
        'Yes',
        'replace',
        'slice',
        'length',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x183e = function () {
        return _0x5b9903;
    };
    return a0_0x183e();
}
const a0_0x35f2e0 = a0_0x2d23;
function a0_0x2d23(pPEWrW, key) {
    const stringArray = a0_0x183e();
    a0_0x2d23 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2d23(pPEWrW, key);
}
const Main = input => {
    const _0x4be932 = a0_0x2d23;
    const tmp = input['trim']()[_0x4be932(0x0)]('\x0a');
    const S = tmp[0x0];
    const T = tmp[0x1];
    let result = _0x4be932(0x1);
    const tmpStr = T[_0x4be932(0x2)](S, '');
    if (T[_0x4be932(0x3)](-0x1) === tmpStr && tmpStr[_0x4be932(0x4)] === 0x1) {
        result = _0x4be932(0x1);
    } else {
        result = 'No';
    }
    console[_0x4be932(0x5)](result);
    return result;
};
Main(require('fs')[a0_0x35f2e0(0x6)]('/dev/stdin', a0_0x35f2e0(0x7)));