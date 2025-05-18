'use strict';
const a0_0x5d0f60 = a0_0x32fc;
function main(input) {
    const _0x28869c = a0_0x32fc;
    const lines = input[_0x28869c(0x0)]('\x0a');
    const N = lines[0x0][_0x28869c(0x0)]('\x20')[_0x28869c(0x1)](x => parseInt(x))[0x0];
    const M = lines[0x0]['split']('\x20')['map'](x => parseInt(x))[0x1];
    let result = ((N - M) * 0x64 + M * 0x76c) * Math['pow'](0x2, M);
    console['log'](result);
}
main(require('fs')[a0_0x5d0f60(0x2)](a0_0x5d0f60(0x3), a0_0x5d0f60(0x4)));
function a0_0x32fc(NiyQeh, key) {
    const stringArray = a0_0x44c4();
    a0_0x32fc = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x32fc(NiyQeh, key);
}
function a0_0x44c4() {
    const _0x3d1669 = [
        'split',
        'map',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x44c4 = function () {
        return _0x3d1669;
    };
    return a0_0x44c4();
}