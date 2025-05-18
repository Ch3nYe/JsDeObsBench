function Main(input) {
    var brjrYm = {
        'nIikV': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'YtgnP': function (callee, param1) {
            return callee(param1);
        },
        'xPrRZ': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'NsdNo': function (x, y) {
            return x < y;
        },
        'VKEie': function (x, y) {
            return x < y;
        }
    };
    input = input['split']('\x0a');
    var n = brjrYm['nIikV'](parseInt, input[0x0], 0xa);
    var q = parseInt(input[0x2], 0xa);
    input[0x1] = input[0x1]['split']('\x20');
    input[0x3] = input[0x3]['split']('\x20');
    var s = brjrYm['YtgnP'](Array, n), t = brjrYm['YtgnP'](Array, q);
    for (var i = 0x0; i < n; i++) {
        s[i] = brjrYm['xPrRZ'](parseInt, input[0x1][i], 0xa);
    }
    for (var i = 0x0; brjrYm['NsdNo'](i, q); i++) {
        t[i] = brjrYm['xPrRZ'](parseInt, input[0x3][i], 0xa);
    }
    var count = 0x0;
    for (var i = 0x0; brjrYm['NsdNo'](i, q); i++) {
        var j;
        for (j = 0x0; brjrYm['NsdNo'](j, n); j++) {
            if (s[j] == t[i])
                break;
        }
        if (brjrYm['VKEie'](j, n))
            count++;
    }
    console['log'](count);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));