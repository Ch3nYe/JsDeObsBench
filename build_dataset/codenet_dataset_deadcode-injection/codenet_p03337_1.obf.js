function a0_0x1b1a() {
    const _0xc08ff3 = [
        'split',
        'max',
        'apply',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x1b1a = function () {
        return _0xc08ff3;
    };
    return a0_0x1b1a();
}
const a0_0x5960ad = a0_0x50d6;
function main(input) {
    const _0x7edc04 = a0_0x50d6;
    const a = parseInt(input[_0x7edc04(0x0)]('\x20')[0x0], 0xa);
    const b = parseInt(input[_0x7edc04(0x0)]('\x20')[0x1], 0xa);
    ptnAdd = a + b;
    ptnSub = a - b;
    ptnMul = a * b;
    ans = Math[_0x7edc04(0x1)][_0x7edc04(0x2)](null, [
        ptnAdd,
        ptnSub,
        ptnMul
    ]);
    console[_0x7edc04(0x3)](ans);
}
function a0_0x50d6(JGruXD, key) {
    const stringArray = a0_0x1b1a();
    a0_0x50d6 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x50d6(JGruXD, key);
}
main(require('fs')[a0_0x5960ad(0x4)]('/dev/stdin', a0_0x5960ad(0x5)));