var a0_0x461285 = a0_0x3911;
var input = require('fs')[a0_0x461285(0x0)](a0_0x461285(0x1), a0_0x461285(0x2));
function a0_0x3911(JEHjGA, key) {
    var stringArray = a0_0x18c3();
    a0_0x3911 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3911(JEHjGA, key);
}
function a0_0x18c3() {
    var _0x5966b9 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'shift',
        'END\x20OF\x20INPUT',
        'forEach',
        'length',
        'log'
    ];
    a0_0x18c3 = function () {
        return _0x5966b9;
    };
    return a0_0x18c3();
}
var Arr = input['replace'](/\n$/, '')[a0_0x461285(0x3)]('\x0a');
while (!![]) {
    var str = Arr[a0_0x461285(0x4)]();
    if (str == a0_0x461285(0x5))
        break;
    var arr = str['split']('\x20');
    arr[a0_0x461285(0x6)](function (v, i) {
        var _0x332b98 = a0_0x3911;
        arr[i] = v[_0x332b98(0x7)];
    });
    console[a0_0x461285(0x8)](arr['join'](''));
}