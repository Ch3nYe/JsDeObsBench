'use strict';
function main(input) {
    const BYimUF = {
        'PCvor': function (x, y) {
            return x + y;
        },
        'PWxkl': function (x, y) {
            return x >= y;
        },
        'yHcbe': function (x, y) {
            return x - y;
        },
        'YqybW': function (x, y) {
            return x <= y;
        },
        'pTWRn': function (x, y) {
            return x % y;
        },
        'hYDmB': function (x, y) {
            return x <= y;
        },
        'OumhQ': function (x, y) {
            return x == y;
        },
        'qZKFk': function (x, y) {
            return x * y;
        }
    };
    input = input['split']('\x20')['map'](v => ~~v);
    const n = input[0x0];
    const m = input[0x1];
    const limit = BYimUF['PCvor'](0x3b9aca00, 0x7);
    if (BYimUF['PWxkl'](Math['abs'](BYimUF['yHcbe'](n, m)), 0x2)) {
        console['log'](0x0);
        return;
    }
    let nn = 0x1;
    for (let i = 0x2; BYimUF['YqybW'](i, n); i++) {
        nn *= i;
        if (nn >= limit) {
            nn = BYimUF['pTWRn'](nn, limit);
        }
    }
    for (let i = 0x2; BYimUF['hYDmB'](i, m); i++) {
        nn *= i;
        if (nn >= limit) {
            nn = nn % limit;
        }
    }
    let tmp = BYimUF['pTWRn'](nn, limit);
    if (BYimUF['OumhQ'](n, m)) {
        tmp = BYimUF['qZKFk'](0x2, tmp);
    }
    const ans = tmp % limit;
    console['log'](ans);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));