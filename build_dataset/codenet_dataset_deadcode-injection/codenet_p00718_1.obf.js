function a0_0x1a8b(KpITwN, key) {
    var stringArray = a0_0x5d52();
    a0_0x1a8b = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1a8b(KpITwN, key);
}
var a0_0x3481d3 = a0_0x1a8b;
function a0_0x5d52() {
    var _0x342f19 = [
        'readFileSync',
        '/dev/stdin',
        'shift',
        'split',
        'forEach',
        'replace',
        '000',
        'map'
    ];
    a0_0x5d52 = function () {
        return _0x342f19;
    };
    return a0_0x5d52();
}
var input = require('fs')[a0_0x3481d3(0x0)](a0_0x3481d3(0x1), 'utf8');
var Arr = input['trim']()['split']('\x0a');
var n = Arr[a0_0x3481d3(0x2)]() - 0x0;
for (var I = 0x0; I < n; I++) {
    var arr = Arr[a0_0x3481d3(0x2)]()[a0_0x3481d3(0x3)]('\x20');
    var sum = 0x0;
    arr[a0_0x3481d3(0x4)](function (v) {
        var _0x14f720 = a0_0x1a8b;
        v = v[_0x14f720(0x5)](/(\d?)([mcxi])/g, function (s, s1, s2) {
            s1 = s1 ? s1 - 0x0 : 0x1;
            if (s2 == 'm')
                s2 = 0x3e8;
            if (s2 == 'c')
                s2 = 0x64;
            if (s2 == 'x')
                s2 = 0xa;
            if (s2 == 'i')
                s2 = 0x1;
            sum += s1 * s2;
            return s;
        });
    });
    var str = (a0_0x3481d3(0x6) + sum)['slice'](-0x4);
    var S = str[a0_0x3481d3(0x3)]('')[a0_0x3481d3(0x7)](Number);
    var result = '';
    S['forEach'](function (v, i) {
        if (v == 0x1)
            v = '';
        if (v !== 0x0) {
            if (i == 0x0)
                result += v + 'm';
            if (i == 0x1)
                result += v + 'c';
            if (i == 0x2)
                result += v + 'x';
            if (i == 0x3)
                result += v + 'i';
        }
    });
    console['log'](result);
}