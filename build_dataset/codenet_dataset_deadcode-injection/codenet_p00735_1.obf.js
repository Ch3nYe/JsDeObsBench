var a0_0x2af722 = a0_0x15c4;
function a0_0x6447() {
    var _0x496545 = [
        'push',
        '/dev/stdin',
        'utf8',
        'some',
        'log',
        'join'
    ];
    a0_0x6447 = function () {
        return _0x496545;
    };
    return a0_0x6447();
}
var ms = [];
function a0_0x15c4(tTfhdd, key) {
    var stringArray = a0_0x6447();
    a0_0x15c4 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x15c4(tTfhdd, key);
}
var flag = [];
for (var i = 0x0; i < 0x493e0; i++)
    flag[i] = !![];
var i = 0x1;
while (!![]) {
    var m = 0x7 * i - 0x1;
    var s = 0x7 * i + 0x1;
    if (m > 0x493e0)
        break;
    i++;
    if (flag[m])
        ms['push'](m);
    if (flag[s])
        ms[a0_0x2af722(0x0)](s);
    var j = 0x2;
    while (!![]) {
        if (m * j > 0x493e0)
            break;
        flag[m * j] = ![];
        flag[s * j] = ![];
        j++;
    }
}
var input = require('fs')['readFileSync'](a0_0x2af722(0x1), a0_0x2af722(0x2));
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x1)
        break;
    var ans = [];
    var i = 0x0;
    ms[a0_0x2af722(0x3)](function (v) {
        var _0x531d3d = a0_0x15c4;
        if (n % v == 0x0)
            ans[_0x531d3d(0x0)](v);
        return n < v;
    });
    console[a0_0x2af722(0x4)](n + ':\x20' + ans[a0_0x2af722(0x5)]('\x20'));
}