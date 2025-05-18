function a0_0x2469(TqXDTb, key) {
    const stringArray = a0_0x3233();
    a0_0x2469 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2469(TqXDTb, key);
}
function a0_0x3233() {
    const _0x3ccf05 = [
        'split',
        'map',
        'sort',
        'forEach',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x3233 = function () {
        return _0x3ccf05;
    };
    return a0_0x3233();
}
const a0_0x3c12f8 = a0_0x2469;
function main(input) {
    const _0x18e216 = a0_0x2469;
    const args = input[_0x18e216(0x0)]('\x0a');
    const N = parseInt(args[0x0], 0xa);
    const sorted = args[0x1]['split']('\x20')[_0x18e216(0x1)](v => parseInt(v))[_0x18e216(0x2)]((a, b) => b - a);
    var alice = 0x0;
    var bob = 0x0;
    sorted[_0x18e216(0x3)]((v, i) => {
        if ((i + 0x1) % 0x2 == 0x0) {
            bob += v;
        } else {
            alice += v;
        }
    });
    console[_0x18e216(0x4)](alice - bob);
}
main(require('fs')['readFileSync'](a0_0x3c12f8(0x5), a0_0x3c12f8(0x6)));