const a0_0x178db9 = a0_0x2e69;
function a0_0x1c0b() {
    const _0x40fff3 = [
        'length',
        'log',
        'abs',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x1c0b = function () {
        return _0x40fff3;
    };
    return a0_0x1c0b();
}
function Main(str) {
    const _0x4449cd = a0_0x2e69;
    let zero = 0x0;
    let one = 0x0;
    for (let i = 0x0; i < str[_0x4449cd(0x0)]; i++) {
        if (str[i] === '1') {
            one++;
        } else if (str[i] === '0') {
            zero++;
        }
    }
    console[_0x4449cd(0x1)](Math[_0x4449cd(0x2)](one - zero));
}
function a0_0x2e69(PWvRtd, key) {
    const stringArray = a0_0x1c0b();
    a0_0x2e69 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2e69(PWvRtd, key);
}
let input = require('fs')[a0_0x178db9(0x3)](a0_0x178db9(0x4), a0_0x178db9(0x5));
Main(input);