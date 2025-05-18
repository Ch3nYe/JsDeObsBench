var a0_0x8873f8 = a0_0x41a3;
function a0_0x41a3(jdbmRY, key) {
    var stringArray = a0_0x36b1();
    a0_0x41a3 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x41a3(jdbmRY, key);
}
var input = require('fs')[a0_0x8873f8(0x0)](a0_0x8873f8(0x1), a0_0x8873f8(0x2));
var arr = input[a0_0x8873f8(0x3)]()[a0_0x8873f8(0x4)]('\x0a');
function a0_0x36b1() {
    var _0x1ce09f = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'length',
        'test',
        'max',
        'slice'
    ];
    a0_0x36b1 = function () {
        return _0x1ce09f;
    };
    return a0_0x36b1();
}
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var Arr = arr['splice'](0x0, n);
    var obj = {};
    var max = 0x0;
    Arr['forEach'](function (v) {
        var _0x149050 = a0_0x41a3;
        var str = v;
        var s = str[0x0];
        var flag = ![];
        for (var i = 0x0; i < str[_0x149050(0x5)]; i++) {
            if (flag)
                s += str[i];
            flag = /[aiueo]/[_0x149050(0x6)](str[i]) ? !![] : ![];
        }
        obj[s] = !![];
        max = Math[_0x149050(0x7)](max, s[_0x149050(0x5)]);
    });
    for (var i = 0x1; i <= max; i++) {
        var Obj = {};
        for (var key in obj) {
            Obj[key[a0_0x8873f8(0x8)](0x0, i)] = !![];
        }
        if (Object['keys'](Obj)[a0_0x8873f8(0x5)] == n) {
            console['log'](i);
            break;
        }
        if (i == max)
            console['log'](-0x1);
    }
}