function a0_0x573b() {
    var _0x2783cc = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'length',
        'Fizz',
        'Buzz',
        'filter',
        'log',
        'join'
    ];
    a0_0x573b = function () {
        return _0x2783cc;
    };
    return a0_0x573b();
}
var a0_0x17febb = a0_0x4fff;
var input = require('fs')[a0_0x17febb(0x0)](a0_0x17febb(0x1), a0_0x17febb(0x2));
function a0_0x4fff(lstzEm, key) {
    var stringArray = a0_0x573b();
    a0_0x4fff = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4fff(lstzEm, key);
}
var Arr = input[a0_0x17febb(0x3)]()[a0_0x17febb(0x4)]('\x0a');
while (!![]) {
    var mn = Arr[a0_0x17febb(0x5)]()[a0_0x17febb(0x4)]('\x20')['map'](Number);
    if (mn[0x0] == 0x0 && mn[0x1] == 0x0)
        break;
    var player = [];
    for (var i = 0x0; i < mn[0x0]; i++)
        player[i] = i + 0x1;
    var arr = [];
    for (var i = 0x0; i < mn[0x1]; i++) {
        var v = Arr[a0_0x17febb(0x5)]();
        arr['push'](v);
    }
    var i = 0x1;
    var k = 0x0;
    var len = mn[0x0];
    for (var I = 0x0; I < arr[a0_0x17febb(0x6)]; I++) {
        var v = arr[I];
        var str = '';
        if (i % 0x3 == 0x0)
            str += a0_0x17febb(0x7);
        if (i % 0x5 == 0x0)
            str += a0_0x17febb(0x8);
        if (str == '')
            str = i;
        if (v != str) {
            player[k] = ![];
            len++;
            if (len == 0x1)
                break;
        }
        i++;
        var H = 0x0;
        do {
            H++;
            if (H > 0x3e8)
                break;
            k++;
            if (k >= player[a0_0x17febb(0x6)]) {
                player = player[a0_0x17febb(0x9)](function (v) {
                    return v != ![];
                });
                k = 0x0;
            }
        } while (player[k] == ![]);
    }
    player = player[a0_0x17febb(0x9)](function (v) {
        return v != ![];
    });
    console[a0_0x17febb(0xa)](player[a0_0x17febb(0xb)]('\x20'));
}