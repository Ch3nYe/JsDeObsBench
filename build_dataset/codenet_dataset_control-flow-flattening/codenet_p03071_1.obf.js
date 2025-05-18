'use strict';
function Main(input) {
    const nXkOtA = {
        'hVQRM': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'ZzWnr': function (x, y) {
            return x > y;
        },
        'lsics': function (x, y) {
            return x - y;
        },
        'dLyne': function (x, y) {
            return x * y;
        },
        'OStjY': function (x, y) {
            return x * y;
        }
    };
    input = input['split']('\x0a')[0x0];
    const numbers = input['split']('\x20')['map'](i => {
        return nXkOtA['hVQRM'](parseInt, i, 0xa);
    });
    const a = numbers[0x0];
    const b = numbers[0x1];
    let result = 0x0;
    if (nXkOtA['ZzWnr'](a, b)) {
        result = nXkOtA['lsics'](nXkOtA['dLyne'](0x2, a), 0x1);
    } else if (b > a) {
        result = nXkOtA['lsics'](nXkOtA['dLyne'](0x2, b), 0x1);
    } else {
        result = nXkOtA['OStjY'](0x2, a);
    }
    console['log'](result);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));