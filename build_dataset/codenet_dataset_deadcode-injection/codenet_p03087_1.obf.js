var a0_0x55f10b = a0_0x2438;
var input = require('fs')[a0_0x55f10b(0x0)]('/dev/stdin', a0_0x55f10b(0x1));
function a0_0x2438(TApZXk, key) {
    var stringArray = a0_0x4f13();
    a0_0x2438 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2438(TApZXk, key);
}
function a0_0x4f13() {
    var _0x24bed7 = [
        'readFileSync',
        'utf8',
        'split',
        'push',
        'log',
        'join'
    ];
    a0_0x4f13 = function () {
        return _0x24bed7;
    };
    return a0_0x4f13();
}
var arr = input[a0_0x55f10b(0x2)]('\x0a');
var nq = arr[0x0][a0_0x55f10b(0x2)]('\x20')['map'](Number);
var str = arr[0x1];
var a = [
    0x0,
    0x0
];
var cnt = 0x0;
for (var i = 0x1; i < str['length']; i++) {
    if (str[i] == 'C' && str[i - 0x1] == 'A')
        cnt++;
    a[a0_0x55f10b(0x3)](cnt);
}
var ans = [];
for (var i = 0x2, len = nq[0x1] + 0x2; i < len; i++) {
    var lr = arr[i][a0_0x55f10b(0x2)]('\x20');
    ans[a0_0x55f10b(0x3)](a[lr[0x1] - 0x0] - a[lr[0x0] - 0x0]);
}
console[a0_0x55f10b(0x4)](ans[a0_0x55f10b(0x5)]('\x0a'));