'use strict';
function Main(input) {
    const IuVQaG = {
        'OqRYk': function (x, y) {
            return x - y;
        },
        'uQSfP': function (x, y) {
            return x + y;
        },
        'tBxOj': function (x, y) {
            return x == y;
        },
        'ziINA': function (callee, param1) {
            return callee(param1);
        },
        'jeHfw': function (callee, param1) {
            return callee(param1);
        },
        'upNFX': function (x, y) {
            return x / y;
        },
        'rSyUk': function (x, y) {
            return x * y;
        },
        'dYhBr': function (x, y) {
            return x - y;
        },
        'LUqUl': function (x, y) {
            return x * y;
        },
        'xUWnu': function (x, y) {
            return x - y;
        },
        'mJVoX': function (x, y) {
            return x - y;
        }
    };
    const N = IuVQaG['OqRYk'](input['split']('\x0a')[0x0], 0x0);
    let e = new Array(IuVQaG['uQSfP'](N, 0x1))['fill'](0x0);
    for (let i = 0x2; i <= N; i++) {
        let cur = i;
        for (let j = 0x2; j <= i; j++) {
            while (IuVQaG['tBxOj'](cur % j, 0x0)) {
                e[j] += 0x1;
                cur /= j;
            }
        }
    }
    const num = m => e['reduce']((ac, x) => ac + (x >= m - 0x1 ? 0x1 : 0x0), 0x0);
    let l75 = IuVQaG['ziINA'](num, 0x4b);
    let l25 = num(0x19);
    let l15 = IuVQaG['jeHfw'](num, 0xf);
    let l5 = IuVQaG['ziINA'](num, 0x5);
    let l3 = IuVQaG['ziINA'](num, 0x3);
    let r5x5x3 = IuVQaG['upNFX'](IuVQaG['rSyUk'](IuVQaG['rSyUk'](l5, l5 - 0x1), IuVQaG['dYhBr'](l3, 0x2)), 0x2);
    let r15x5 = IuVQaG['LUqUl'](l15, IuVQaG['xUWnu'](l5, 0x1));
    let r25x3 = IuVQaG['rSyUk'](l25, IuVQaG['mJVoX'](l3, 0x1));
    let r75 = l75;
    console['log'](IuVQaG['uQSfP'](IuVQaG['uQSfP'](r75, r25x3), r15x5) + r5x5x3);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));