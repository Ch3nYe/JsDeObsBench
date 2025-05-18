function a0_0x57e9(ziDFeQ, key) {
    var stringArray = a0_0x3b49();
    a0_0x57e9 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x57e9(ziDFeQ, key);
}
var a0_0x7fa18d = a0_0x57e9;
var input = require('fs')[a0_0x7fa18d(0x0)]('/dev/stdin', a0_0x7fa18d(0x1));
var [w, h, c] = input[a0_0x7fa18d(0x2)]()[a0_0x7fa18d(0x3)]('\x20');
function a0_0x3b49() {
    var _0x36167a = [
        'readFileSync',
        'utf8',
        'trim',
        'split',
        'repeat',
        'push',
        'floor',
        'join'
    ];
    a0_0x3b49 = function () {
        return _0x36167a;
    };
    return a0_0x3b49();
}
w = w - 0x0;
h = h - 0x0;
var ans = [];
ans['push']('+' + '-'[a0_0x7fa18d(0x4)](w - 0x2) + '+');
for (var i = 0x0; i < h - 0x2; i++)
    ans[a0_0x7fa18d(0x5)]('|' + '.'['repeat'](w - 0x2) + '|');
ans[a0_0x7fa18d(0x5)]('+' + '-'[a0_0x7fa18d(0x4)](w - 0x2) + '+');
ans[Math[a0_0x7fa18d(0x6)](h / 0x2)] = '|' + '.'[a0_0x7fa18d(0x4)]((w - 0x3) / 0x2) + c + '.'['repeat']((w - 0x3) / 0x2) + '|';
console['log'](ans[a0_0x7fa18d(0x7)]('\x0a')[a0_0x7fa18d(0x2)]());