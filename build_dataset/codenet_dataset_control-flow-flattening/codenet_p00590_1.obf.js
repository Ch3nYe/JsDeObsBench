function prime(max) {
    var FFuptV = {
        'wxmSM': function (x, y) {
            return x <= y;
        },
        'ktCgv': function (x, y) {
            return x == y;
        }
    };
    var arr = [];
    for (var i = 0x0; FFuptV['wxmSM'](i, max); i++)
        arr[i] = i;
    arr[0x0] = ![];
    arr[0x1] = ![];
    var sqrt = Math['floor'](Math['sqrt'](max));
    for (var i = 0x2; FFuptV['wxmSM'](i, sqrt); i++) {
        if (FFuptV['ktCgv'](arr[i], ![]))
            continue;
        for (var j = i + i; FFuptV['wxmSM'](j, max); j += i) {
            arr[j] = ![];
        }
    }
    var result = {};
    for (var i = 0x0; FFuptV['wxmSM'](i, max); i++) {
        if (arr[i] !== ![])
            result[arr[i]] = !![];
    }
    return result;
}
var p = prime(0x2710);
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a')['map'](Number);
for (var i = 0x0; i < Arr['length']; i++) {
    var wJTIRq = '7|3|0|4|2|1|6|5'['split']('|');
    var vjCRfC = 0x0;
    while (!![]) {
        switch (wJTIRq[vjCRfC++]) {
        case '0':
            var B = [];
            continue;
        case '1':
            var pair = 0x0;
            continue;
        case '2':
            for (var j = a; j >= 0x1; j--)
                B['push'](j);
            continue;
        case '3':
            var A = [];
            continue;
        case '4':
            for (var j = 0x1; j <= a; j++)
                A['push'](j);
            continue;
        case '5':
            console['log'](pair);
            continue;
        case '6':
            for (var j = 0x0; j < a; j++) {
                if (p['hasOwnProperty'](A[j]) && p['hasOwnProperty'](B[j]))
                    pair++;
            }
            continue;
        case '7':
            var a = Arr[i];
            continue;
        }
        break;
    }
}