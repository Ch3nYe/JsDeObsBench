const a0_0x2c751d = a0_0x3c47;
function Main(input) {
    const _0x2dff8e = a0_0x3c47;
    input = input['split']('\x20');
    const num = parseInt(input[0x0], 0xa);
    if (num > 0x51) {
        console[_0x2dff8e(0x0)]('No');
        return;
    }
    if (num % 0x2 == 0x0 && num / 0x2 < 0xa || num % 0x3 == 0x0 && num / 0x3 < 0xa || num % 0x4 == 0x0 && num / 0x4 < 0xa || num % 0x5 == 0x0 && num / 0x5 < 0xa || num % 0x6 == 0x0 && num / 0x6 < 0xa || num % 0x7 == 0x0 && num / 0x7 < 0xa || num % 0x8 == 0x0 && num / 0x8 < 0xa || num % 0x9 == 0x0 && num / 0x9 < 0xa) {
        console[_0x2dff8e(0x0)](_0x2dff8e(0x1));
    } else {
        console[_0x2dff8e(0x0)]('No');
    }
}
function a0_0x3c47(YbIfcI, key) {
    const stringArray = a0_0x3e29();
    a0_0x3c47 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3c47(YbIfcI, key);
}
Main(require('fs')[a0_0x2c751d(0x2)](a0_0x2c751d(0x3), a0_0x2c751d(0x4)));
function a0_0x3e29() {
    const _0x4acecb = [
        'log',
        'Yes',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x3e29 = function () {
        return _0x4acecb;
    };
    return a0_0x3e29();
}