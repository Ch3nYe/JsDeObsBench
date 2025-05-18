'use strict';
const a0_0x230586 = a0_0x19f4;
function a0_0x19f4(fCIVlD, key) {
    const stringArray = a0_0x116e();
    a0_0x19f4 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x19f4(fCIVlD, key);
}
const main = arg => {
    const _0x52dc85 = a0_0x19f4;
    arg = arg[_0x52dc85(0x0)]()[_0x52dc85(0x1)]('\x0a');
    const N = parseInt(arg[0x0]['split']('\x20')[0x0]);
    let L = arg[0x1][_0x52dc85(0x1)]('\x20')[_0x52dc85(0x2)](n => parseInt(n))[_0x52dc85(0x3)]((a, b) => b - a);
    const longest = L[_0x52dc85(0x4)]();
    const sum = L[_0x52dc85(0x5)]((m, n) => m + n);
    console[_0x52dc85(0x6)](longest < sum ? 'Yes' : 'No');
};
main(require('fs')['readFileSync']('/dev/stdin', a0_0x230586(0x7)));
function a0_0x116e() {
    const _0x4445b4 = [
        'trim',
        'split',
        'map',
        'sort',
        'shift',
        'reduce',
        'log',
        'utf8'
    ];
    a0_0x116e = function () {
        return _0x4445b4;
    };
    return a0_0x116e();
}