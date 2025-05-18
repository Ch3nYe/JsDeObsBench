'use strict';
function Main(input) {
    const NwWYuU = {
        'BALDM': function (x, y) {
            return x === y;
        },
        'PYOfP': function (x, y) {
            return x !== y;
        },
        'VKmjL': function (x, y) {
            return x + y;
        },
        'aaGus': function (callee, param1) {
            return callee(param1);
        },
        'SGVri': function (x, y) {
            return x % y;
        },
        'xhltc': function (x, y) {
            return x % y;
        },
        'SJheU': function (x, y) {
            return x < y;
        },
        'PfRZC': function (x, y) {
            return x / y;
        }
    };
    input = input['split']('\x0a');
    let N = parseInt(input[0x0]);
    let res = '';
    if (NwWYuU['BALDM'](N, 0x0)) {
        console['log'](0x0);
        return;
    }
    while (NwWYuU['PYOfP'](N, 0x0)) {
        res = NwWYuU['VKmjL'](NwWYuU['aaGus'](String, Math['abs'](NwWYuU['SGVri'](N, -0x2))), res);
        if (NwWYuU['xhltc'](N, -0x2) < 0x0)
            N += NwWYuU['SJheU'](N, 0x0) ? -0x1 : 0x1;
        N = parseInt(NwWYuU['PfRZC'](N, -0x2));
    }
    console['log'](res);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));