const a0_0x249400 = a0_0x88d0;
function a0_0x3cab() {
    const _0x4d5ea7 = [
        'trim',
        'floor',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x3cab = function () {
        return _0x4d5ea7;
    };
    return a0_0x3cab();
}
function a0_0x88d0(ZdJYEh, key) {
    const stringArray = a0_0x3cab();
    a0_0x88d0 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x88d0(ZdJYEh, key);
}
function Main(input) {
    const _0x22a5bf = a0_0x88d0;
    const chars = input[_0x22a5bf(0x0)]()['split']('\x20');
    const x = Math['floor'](chars[0x0]);
    const y = Math[_0x22a5bf(0x1)](chars[0x1]);
    let ans = 0x0;
    if (x === 0x1 && y === 0x1) {
        ans += 0x61a80;
    }
    if (x === 0x1)
        ans += 0x493e0;
    if (y === 0x1)
        ans += 0x493e0;
    if (x === 0x2)
        ans += 0x30d40;
    if (y === 0x2)
        ans += 0x30d40;
    if (x === 0x3)
        ans += 0x186a0;
    if (y === 0x3)
        ans += 0x186a0;
    console[_0x22a5bf(0x2)](ans);
}
Main(require('fs')[a0_0x249400(0x3)]('/dev/stdin', a0_0x249400(0x4)));