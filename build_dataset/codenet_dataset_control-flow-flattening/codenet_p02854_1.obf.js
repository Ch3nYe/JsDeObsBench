function Main(input) {
    var bVNjND = {
        'TTOvW': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'iQthI': function (x, y) {
            return x < y;
        },
        'mTcav': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'DcRRq': function (x, y) {
            return x < y;
        },
        'EPinh': function (x, y) {
            return x + y;
        },
        'pggyJ': function (x, y) {
            return x / y;
        },
        'xKreG': function (x, y) {
            return x == y;
        },
        'NFzlX': function (x, y) {
            return x - y;
        },
        'jbLYN': function (x, y) {
            return x - y;
        }
    };
    var N = bVNjND['TTOvW'](parseInt, input[0x0], 0xa);
    var A = input[0x1]['split']('\x20');
    var total = 0x0;
    for (var i = 0x0; bVNjND['iQthI'](i, N); i++) {
        A[i] = bVNjND['mTcav'](parseInt, A[i], 0xa);
        total += A[i];
    }
    var result = 0x0;
    var mae = 0x0;
    var ato = 0x0;
    var target = 0x0;
    for (var i = 0x0; bVNjND['iQthI'](i, N); i++) {
        if (bVNjND['DcRRq'](bVNjND['EPinh'](mae, A[i]), bVNjND['pggyJ'](total, 0x2))) {
            mae += A[i];
        } else if (bVNjND['xKreG'](bVNjND['EPinh'](mae, A[i]), total / 0x2)) {
            console['log']('%s', 0x0);
            return;
        } else {
            target = i;
            ato = bVNjND['NFzlX'](total, mae) - A[i];
            break;
        }
    }
    var diff = Math['abs'](bVNjND['NFzlX'](ato, mae));
    var result = Math['abs'](bVNjND['jbLYN'](A[i], diff));
    console['log']('%s', result);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a'));