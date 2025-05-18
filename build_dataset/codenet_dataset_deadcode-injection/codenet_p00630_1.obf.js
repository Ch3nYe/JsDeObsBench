var a0_0x533578 = a0_0x33ce;
var input = require('fs')[a0_0x533578(0x0)](a0_0x533578(0x1), a0_0x533578(0x2));
function a0_0x33ce(RVHCsu, key) {
    var stringArray = a0_0x2b8f();
    a0_0x33ce = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x33ce(RVHCsu, key);
}
var Arr = input[a0_0x533578(0x3)](/\n$/, '')[a0_0x533578(0x4)]('\x0a');
function a0_0x2b8f() {
    var _0xcbe618 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'replace',
        'split',
        'shift',
        'toLowerCase',
        'length',
        'toUpperCase',
        'log',
        'join'
    ];
    a0_0x2b8f = function () {
        return _0xcbe618;
    };
    return a0_0x2b8f();
}
while (!![]) {
    var nt = Arr[a0_0x533578(0x5)]()[a0_0x533578(0x4)]('\x20');
    var str = nt[0x0];
    var type = nt[0x1];
    if (type == 'X')
        break;
    str = str[a0_0x533578(0x3)](/^./, function (s) {
        var _0x39e2d2 = a0_0x33ce;
        return s[_0x39e2d2(0x6)]();
    });
    str = str[a0_0x533578(0x3)](/[A-Z]/g, function (s) {
        return '_' + s;
    });
    var arr = str[a0_0x533578(0x4)]('_');
    for (var i = 0x1; i < arr[a0_0x533578(0x7)]; i++) {
        arr[i] = arr[i][a0_0x533578(0x3)](/./, function (s) {
            var _0x1a404d = a0_0x33ce;
            return s[_0x1a404d(0x8)]();
        });
    }
    if (type == 'U') {
        arr[0x0] = arr[0x0][a0_0x533578(0x3)](/^./, function (s) {
            return s['toUpperCase']();
        });
        console[a0_0x533578(0x9)](arr[a0_0x533578(0xa)](''));
    }
    if (type == 'L')
        console[a0_0x533578(0x9)](arr['join'](''));
    if (type == 'D')
        console[a0_0x533578(0x9)](arr[a0_0x533578(0xa)]('_')[a0_0x533578(0x6)]());
}