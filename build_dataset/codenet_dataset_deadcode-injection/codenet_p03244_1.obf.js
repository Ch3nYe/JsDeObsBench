'use strict';
const a0_0x22fad1 = a0_0x2982;
function a0_0x3d5e() {
    const _0x59efaf = [
        'shift',
        'split',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x3d5e = function () {
        return _0x59efaf;
    };
    return a0_0x3d5e();
}
function Main(input) {
    const _0x5c3cd5 = a0_0x2982;
    let lines = input['split']('\x0a');
    let N = lines['shift']() - 0x0;
    let V = lines[_0x5c3cd5(0x0)]()[_0x5c3cd5(0x1)](/\s/)['map'](v => v - 0x0);
    let ans = 0x0;
    for (let n = 0x0; n < N - 0x2; n++) {
        if (V[n] == V[n + 0x1])
            ans += 0x1;
        if (V[n] != V[n + 0x2])
            ans += 0x1;
    }
    console['log'](ans);
}
function a0_0x2982(AjyAbT, key) {
    const stringArray = a0_0x3d5e();
    a0_0x2982 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2982(AjyAbT, key);
}
Main(require('fs')[a0_0x22fad1(0x2)](a0_0x22fad1(0x3), 'utf8'));