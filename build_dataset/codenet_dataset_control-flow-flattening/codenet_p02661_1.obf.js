'use strict';
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var cin = input['trim']()['split'](/ |\n/), cid = 0x0;
console['log'](main()['toString']());
function main() {
    const TPrLcp = {
        'zCjma': function (callee, param1) {
            return callee(param1);
        },
        'vDCLQ': function (x, y) {
            return x == y;
        },
        'WJEDV': function (x, y) {
            return x != y;
        },
        'wzdia': function (x, y) {
            return x - y;
        },
        'uoLdh': function (x, y) {
            return x / y;
        },
        'iAWil': function (x, y) {
            return x - y;
        },
        'ypCtN': function (x, y) {
            return x / y;
        },
        'WPNNJ': function (x, y) {
            return x - y;
        },
        'Kcvkp': function (x, y) {
            return x / y;
        },
        'NcHQH': function (x, y) {
            return x + y;
        },
        'IuikB': function (x, y) {
            return x - y;
        },
        'pPUKp': function (x, y) {
            return x / y;
        },
        'lFshV': function (x, y) {
            return x + y;
        },
        'HDbBB': function (x, y) {
            return x - y;
        }
    };
    let n = +cin['shift']();
    let a = TPrLcp['zCjma'](Array, n);
    let b = Array(n);
    for (let i = 0x0; i < n; i++) {
        a[i] = +cin['shift']();
        b[i] = +cin['shift']();
    }
    a = a['sort']((x, y) => x - y);
    b = b['sort']((x, y) => x - y);
    let min, max;
    if (TPrLcp['vDCLQ'](n % 0x2, 0x0)) {
        if (TPrLcp['WJEDV'](a[TPrLcp['wzdia'](TPrLcp['uoLdh'](n, 0x2), 0x1)], a[n / 0x2]))
            min = TPrLcp['iAWil'](a[TPrLcp['uoLdh'](n, 0x2)], TPrLcp['uoLdh'](0x1, 0x2));
        else
            min = a[TPrLcp['ypCtN'](0x2, n)];
        if (b[TPrLcp['WPNNJ'](TPrLcp['Kcvkp'](n, 0x2), 0x1)] != b[n / 0x2])
            max = TPrLcp['NcHQH'](b[TPrLcp['IuikB'](n / 0x2, 0x1)], TPrLcp['pPUKp'](0x1, 0x2));
        else
            max = b[TPrLcp['WPNNJ'](n / 0x2, 0x1)];
        return (max - min) * 0x2 + 0x1;
    } else {
        min = a[TPrLcp['IuikB'](n, 0x1) / 0x2];
        max = b[TPrLcp['wzdia'](n, 0x1) / 0x2];
        return TPrLcp['lFshV'](TPrLcp['HDbBB'](max, min), 0x1);
    }
}