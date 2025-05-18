const a0_0x276513 = a0_0x4041;
const input = require('fs')[a0_0x276513(0x0)](a0_0x276513(0x1), a0_0x276513(0x2));
function a0_0x2ed1() {
    const _0x2e518a = [
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2ed1 = function () {
        return _0x2e518a;
    };
    return a0_0x2ed1();
}
function a0_0x4041(jRrABd, key) {
    const stringArray = a0_0x2ed1();
    a0_0x4041 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4041(jRrABd, key);
}
(input => {
    const a = input - 0x0;
    console['log'](a + a * a + a * a * a);
})(input);