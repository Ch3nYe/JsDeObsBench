function a0_0xafc3(mOYeRc, key) {
    const stringArray = a0_0x40ba();
    a0_0xafc3 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0xafc3(mOYeRc, key);
}
const a0_0x5e6a7e = a0_0xafc3;
function Main(input) {
    const _0x104b28 = a0_0xafc3;
    const numbers = input[_0x104b28(0x0)]('\x20')[_0x104b28(0x1)](n => Number(n));
    const a = numbers[0x0];
    const b = numbers[0x1];
    const c = numbers[0x2];
    if (a === b) {
        console['log'](c);
    } else if (b === c) {
        console[_0x104b28(0x2)](a);
    } else {
        console[_0x104b28(0x2)](b);
    }
}
function a0_0x40ba() {
    const _0x132a55 = [
        'split',
        'map',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x40ba = function () {
        return _0x132a55;
    };
    return a0_0x40ba();
}
Main(require('fs')[a0_0x5e6a7e(0x3)](a0_0x5e6a7e(0x4), 'utf8'));