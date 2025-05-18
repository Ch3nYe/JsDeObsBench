const a0_0x1bd347 = a0_0x9034;
const [n, aStr] = require('fs')[a0_0x1bd347(0x0)](a0_0x1bd347(0x1), 'utf8')[a0_0x1bd347(0x2)](/\n/);
let as = aStr[a0_0x1bd347(0x2)](/\s/)[a0_0x1bd347(0x3)](Number);
let total = as[a0_0x1bd347(0x4)]((a, b) => a ^ b);
function a0_0x9034(sQyGGg, key) {
    const stringArray = a0_0x146f();
    a0_0x9034 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x9034(sQyGGg, key);
}
function a0_0x146f() {
    const _0x1060da = [
        'readFileSync',
        '/dev/stdin',
        'split',
        'map',
        'reduce',
        'log',
        'join'
    ];
    a0_0x146f = function () {
        return _0x1060da;
    };
    return a0_0x146f();
}
console[a0_0x1bd347(0x5)](as[a0_0x1bd347(0x3)](n => n ^ total)[a0_0x1bd347(0x6)]('\x20'));