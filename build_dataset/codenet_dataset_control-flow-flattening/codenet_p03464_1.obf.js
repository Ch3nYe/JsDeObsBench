console['log']((args => {
    const VyKVRt = {
        'yGeAz': function (x, y) {
            return x >= y;
        },
        'KPPjJ': function (x, y) {
            return x - y;
        },
        'FgiBi': function (x, y) {
            return x + y;
        },
        'ZEaKx': function (x, y) {
            return x + y;
        },
        'hKUnl': function (x, y) {
            return x * y;
        },
        'jKZuh': function (x, y) {
            return x / y;
        },
        'LPVbv': function (x, y) {
            return x + y;
        },
        'wQUoN': function (x, y) {
            return x / y;
        }
    };
    const [[K], A] = args['trim']()['split']`\n`['map'](r => r['split']` `['map'](v => v | 0x0));
    let min = 0x2, max = 0x3;
    for (let i = K - 0x2; VyKVRt['yGeAz'](i, 0x0); i--) {
        if (VyKVRt['KPPjJ'](VyKVRt['FgiBi'](max, A[VyKVRt['ZEaKx'](i, 0x1)]), 0x1) < A[i])
            return '-1';
        min = VyKVRt['hKUnl'](Math['ceil'](VyKVRt['jKZuh'](min, A[i])), A[i]);
        max = VyKVRt['LPVbv'](VyKVRt['hKUnl'](Math['floor'](VyKVRt['wQUoN'](max, A[i])), A[i]), A[i]) - 0x1;
    }
    return min + '\x20' + max;
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));