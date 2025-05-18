const a0_0x561b7d = a0_0x2038;
function a0_0x48c3() {
    const _0x268c80 = [
        'length',
        'floor',
        'pow',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x48c3 = function () {
        return _0x268c80;
    };
    return a0_0x48c3();
}
function Main(input) {
    const _0x5481af = a0_0x2038;
    let num = parseInt(input, 0xa);
    let sum = 0x0;
    let tmp = 0x0;
    for (let i = input[_0x5481af(0x0)] - 0x1; 0x0 <= i; i--) {
        tmp = Math[_0x5481af(0x1)](num / Math[_0x5481af(0x2)](0xa, i));
        sum += tmp;
        num -= tmp * Math[_0x5481af(0x2)](0xa, i);
    }
    const ans = sum % 0x9 === 0x0 ? 'Yes' : 'No';
    console[_0x5481af(0x3)](ans);
}
function a0_0x2038(CuFoVj, key) {
    const stringArray = a0_0x48c3();
    a0_0x2038 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2038(CuFoVj, key);
}
;
Main(require('fs')[a0_0x561b7d(0x4)](a0_0x561b7d(0x5), a0_0x561b7d(0x6)));