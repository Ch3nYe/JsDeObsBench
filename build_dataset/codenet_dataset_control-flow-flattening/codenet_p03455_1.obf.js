'use strict';
function main(input) {
    const AnYlLX = {
        'DhJfR': function (x, y) {
            return x ^ y;
        },
        'gPzUa': function (x, y) {
            return x % y;
        },
        'tRDfe': 'Even'
    };
    input = input['trim']()['split']('\x20')['map'](Number);
    const A = input[0x0];
    const B = input[0x1];
    const ans = AnYlLX['DhJfR'](A % 0x2, AnYlLX['gPzUa'](B, 0x2)) ? AnYlLX['tRDfe'] : 'Odd';
    console['log'](ans);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));