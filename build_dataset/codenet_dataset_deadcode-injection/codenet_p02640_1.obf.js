const a0_0x548411 = a0_0x33de;
const input = require('fs')[a0_0x548411(0x0)](a0_0x548411(0x1), a0_0x548411(0x2))['split']('\x0a');
const [X, Y] = input[0x0]['split']('\x20')[a0_0x548411(0x3)](Number);
let ans = 'No';
function a0_0xd668() {
    const _0x632b87 = [
        'readFileSync',
        '/dev/stdin',
        'utf-8',
        'map',
        'log'
    ];
    a0_0xd668 = function () {
        return _0x632b87;
    };
    return a0_0xd668();
}
function a0_0x33de(JhVkAm, key) {
    const stringArray = a0_0xd668();
    a0_0x33de = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x33de(JhVkAm, key);
}
if (X < Y) {
    const r = Y - X * 0x2;
    if (r % 0x2 === 0x0 && r / 0x2 <= X)
        ans = 'Yes';
}
console[a0_0x548411(0x4)](ans);