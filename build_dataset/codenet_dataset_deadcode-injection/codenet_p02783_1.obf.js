const a0_0x4ecc6e = a0_0x259b;
function Main(input) {
    const _0xbdf59f = a0_0x259b;
    const args = input[_0xbdf59f(0x0)]('\x20');
    const H = parseInt(args[0x0], 0xa);
    const A = parseInt(args[0x1], 0xa);
    const ans = Math[_0xbdf59f(0x1)](H / A);
    console[_0xbdf59f(0x2)](ans);
}
function a0_0x259b(UVBUzS, key) {
    const stringArray = a0_0x2ae9();
    a0_0x259b = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x259b(UVBUzS, key);
}
function a0_0x2ae9() {
    const _0x25765d = [
        'split',
        'ceil',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2ae9 = function () {
        return _0x25765d;
    };
    return a0_0x2ae9();
}
Main(require('fs')['readFileSync'](a0_0x4ecc6e(0x3), a0_0x4ecc6e(0x4)));