const a0_0x304749 = a0_0x171f;
function a0_0x171f(DBUKgy, key) {
    const stringArray = a0_0xeca5();
    a0_0x171f = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x171f(DBUKgy, key);
}
const main = input => {
    const _0xfd5b5 = a0_0x171f;
    var d = input[0x1]['split']('\x20')['map'](p => parseInt(p, 0xa))[_0xfd5b5(0x0)]((p, q) => p > q ? 0x1 : -0x1);
    console[_0xfd5b5(0x1)](d[d['length'] / 0x2] - d[d[_0xfd5b5(0x2)] / 0x2 - 0x1]);
};
main(require('fs')['readFileSync'](a0_0x304749(0x3), a0_0x304749(0x4))['split']('\x0a'));
function a0_0xeca5() {
    const _0x31ae8d = [
        'sort',
        'log',
        'length',
        '/dev/stdin',
        'utf8'
    ];
    a0_0xeca5 = function () {
        return _0x31ae8d;
    };
    return a0_0xeca5();
}