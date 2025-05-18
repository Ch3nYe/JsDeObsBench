function Main(input) {
    var WkiSDb = {
        'abVlt': function (callee, param1) {
            return callee(param1);
        },
        'EfcmM': function (callee, param1) {
            return callee(param1);
        },
        'McDQX': function (x, y) {
            return x <= y;
        },
        'RxaHU': function (x, y) {
            return x === y;
        },
        'YBuQe': function (x, y) {
            return x % y;
        },
        'jvWuI': function (x, y) {
            return x !== y;
        }
    };
    var str = input;
    const n = str['split']('\x0a');
    var k = WkiSDb['abVlt'](Number, n[0x0]);
    var p = n[0x1]['split']('\x20');
    var a = WkiSDb['EfcmM'](Number, p[0x0]);
    var b = WkiSDb['abVlt'](Number, p[0x1]);
    var ans = '';
    for (var i = a; WkiSDb['McDQX'](i, b); i++) {
        if (WkiSDb['RxaHU'](WkiSDb['YBuQe'](i, k), 0x0)) {
            ans = 'OK';
        }
    }
    if (WkiSDb['jvWuI'](ans, 'OK')) {
        ans = 'NG';
    }
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));