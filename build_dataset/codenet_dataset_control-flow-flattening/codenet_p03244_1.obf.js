'use strict';
function Main(input) {
    const qGssJh = {
        'tsLJK': function (x, y) {
            return x - y;
        },
        'nlBvT': function (x, y) {
            return x < y;
        },
        'ogjOp': function (x, y) {
            return x == y;
        },
        'BsrRq': function (x, y) {
            return x + y;
        },
        'wwAdD': function (x, y) {
            return x != y;
        }
    };
    let lines = input['split']('\x0a');
    let N = qGssJh['tsLJK'](lines['shift'](), 0x0);
    let V = lines['shift']()['split'](/\s/)['map'](v => v - 0x0);
    let ans = 0x0;
    for (let n = 0x0; qGssJh['nlBvT'](n, qGssJh['tsLJK'](N, 0x2)); n++) {
        if (qGssJh['ogjOp'](V[n], V[qGssJh['BsrRq'](n, 0x1)]))
            ans += 0x1;
        if (qGssJh['wwAdD'](V[n], V[qGssJh['BsrRq'](n, 0x2)]))
            ans += 0x1;
    }
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));