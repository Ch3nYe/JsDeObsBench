function prime(max) {
    var iaQKxn = {
        'SoXFs': function (x, y) {
            return x <= y;
        },
        'ZWBCG': function (x, y) {
            return x + y;
        },
        'qWCye': function (x, y) {
            return x <= y;
        },
        'Bgjix': function (x, y) {
            return x !== y;
        }
    };
    var arr = [];
    for (var i = 0x0; iaQKxn['SoXFs'](i, max); i++)
        arr[i] = i;
    arr[0x0] = ![];
    arr[0x1] = ![];
    var sqrt = Math['floor'](Math['sqrt'](max));
    for (var i = 0x2; i <= sqrt; i++) {
        if (arr[i] == ![])
            continue;
        for (var j = iaQKxn['ZWBCG'](i, i); iaQKxn['qWCye'](j, max); j += i) {
            arr[j] = ![];
        }
    }
    var result = [];
    for (var i = 0x0; iaQKxn['qWCye'](i, max); i++) {
        if (iaQKxn['Bgjix'](arr[i], ![]))
            result['push'](arr[i]);
    }
    return result;
}
var p = prime(0xc350);
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var cnt = 0x0;
    var k = p['length'] - 0x1;
    for (var i = 0x0; i < p['length']; i++) {
        while (p[i] + p[k] > n)
            k--;
        if (k < i)
            break;
        if (p[i] + p[k] == n)
            cnt++;
    }
    console['log'](cnt);
}