const a0_0x2d6dca = a0_0x193a;
function a0_0x193a(YGjcgC, key) {
    const stringArray = a0_0x827c();
    a0_0x193a = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x193a(YGjcgC, key);
}
function Main(input) {
    'use strict';
    const _0x4c9625 = a0_0x193a;
    const temp = input[_0x4c9625(0x0)]('\x0a');
    const n = parseInt(temp[_0x4c9625(0x1)](), 0xa);
    for (let i = 0x0; i < n; i++) {
        temp[i] = temp[i]['split']('\x20');
        temp[i][_0x4c9625(0x2)](i + 0x1);
        temp[i][0x1] = parseInt(temp[i][0x1], 0xa);
    }
    temp[_0x4c9625(0x3)]((a, b) => b[0x1] - a[0x1]);
    temp[_0x4c9625(0x3)]((a, b) => {
        if (a[0x0] < b[0x0])
            return -0x1;
        else if (a[0x0] > b[0x0])
            return 0x1;
        else
            0x0;
    });
    const ans = temp['map'](e => e[0x2]);
    console[_0x4c9625(0x4)](ans[_0x4c9625(0x5)]('\x0a'));
    return ![];
}
Main(require('fs')[a0_0x2d6dca(0x6)]('/dev/stdin', a0_0x2d6dca(0x7)));
function a0_0x827c() {
    const _0x575f17 = [
        'split',
        'shift',
        'push',
        'sort',
        'log',
        'join',
        'readFileSync',
        'utf8'
    ];
    a0_0x827c = function () {
        return _0x575f17;
    };
    return a0_0x827c();
}