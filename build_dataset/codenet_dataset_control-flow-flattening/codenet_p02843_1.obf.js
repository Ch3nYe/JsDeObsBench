function Main(input) {
    var prZwzL = {
        'aRsVI': function (x, y) {
            return x >= y;
        },
        'LNkQD': function (x, y) {
            return x <= y;
        },
        'uBKzu': function (x, y) {
            return x * y;
        }
    };
    const n = input['split']('\x0a')[0x0];
    var ans = 0x0;
    if (prZwzL['aRsVI'](n, 0x9dd)) {
        ans = 0x1;
        console['log'](ans);
    } else {
        for (var i = 0x1; i <= 0x19; i++) {
            if (n >= i * 0x65 && prZwzL['LNkQD'](n, prZwzL['uBKzu'](i, 0x69))) {
                ans = 0x1;
                break;
            }
        }
    }
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));