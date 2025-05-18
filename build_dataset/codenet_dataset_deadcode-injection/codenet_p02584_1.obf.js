const a0_0x22b9ed = a0_0x4759;
const input = require('fs')[a0_0x22b9ed(0x0)](a0_0x22b9ed(0x1), a0_0x22b9ed(0x2));
const lines = input[a0_0x22b9ed(0x3)]('\x0a');
let [X, K, D] = lines[0x0][a0_0x22b9ed(0x3)]('\x20')[a0_0x22b9ed(0x4)](Number);
function a0_0x4759(WfQIai, key) {
    const stringArray = a0_0x8d5c();
    a0_0x4759 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4759(WfQIai, key);
}
X = Math[a0_0x22b9ed(0x5)](X);
const div = Math[a0_0x22b9ed(0x6)](Math['floor'](X / D), K);
let x = X - div * D;
function a0_0x8d5c() {
    const _0x2f6c6f = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'map',
        'abs',
        'min',
        'log'
    ];
    a0_0x8d5c = function () {
        return _0x2f6c6f;
    };
    return a0_0x8d5c();
}
let k = K - div;
for (let i = 0x0; i < k; i++) {
    x -= D;
    if (x <= 0x0) {
        if (!((k - i) % 0x2)) {
            x += D;
        }
        break;
    }
}
console[a0_0x22b9ed(0x7)](Math['abs'](x));