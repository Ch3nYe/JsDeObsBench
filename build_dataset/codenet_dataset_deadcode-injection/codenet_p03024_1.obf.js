'use strict';
function a0_0x3a50(SjwNFg, key) {
    const stringArray = a0_0x24bc();
    a0_0x3a50 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3a50(SjwNFg, key);
}
const a0_0x2f7fab = a0_0x3a50;
const main = arg => {
    const _0x1f938e = a0_0x3a50;
    arg = arg['trim']()[_0x1f938e(0x0)]('\x0a');
    const S = arg[0x0][_0x1f938e(0x0)]('');
    const win = S['filter'](n => n === 'o')[_0x1f938e(0x1)];
    const rest = 0xf - S[_0x1f938e(0x1)];
    console[_0x1f938e(0x2)](rest + win >= 0x8 ? _0x1f938e(0x3) : 'NO');
};
function a0_0x24bc() {
    const _0x4956f4 = [
        'split',
        'length',
        'log',
        'YES',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x24bc = function () {
        return _0x4956f4;
    };
    return a0_0x24bc();
}
main(require('fs')[a0_0x2f7fab(0x4)](a0_0x2f7fab(0x5), a0_0x2f7fab(0x6)));