'use strict';
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var cin = input['split'](/ |\n/), cid = 0x0;
var myOut = main();
if (myOut !== undefined)
    console['log'](myOut);
function main() {
    const xnyAva = {
        'nVwjl': function (callee, param1) {
            return callee(param1);
        },
        'zUURx': function (x, y) {
            return x + y;
        },
        'evIom': function (x, y) {
            return x + y;
        },
        'cgQJE': function (x, y) {
            return x + y;
        },
        'AUBlN': function (x, y) {
            return x - y;
        },
        'OkIsB': function (x, y) {
            return x + y;
        },
        'TRSAx': function (x, y) {
            return x * y;
        }
    };
    let n = +cin['shift']();
    let B = {};
    let C = {};
    cin['forEach']((v, i) => {
        let x = +v;
        B[xnyAva['nVwjl'](String, xnyAva['zUURx'](i, x))] = xnyAva['evIom'](B[xnyAva['nVwjl'](String, xnyAva['cgQJE'](i, x))], 0x1) || 0x1;
        C[xnyAva['nVwjl'](String, xnyAva['AUBlN'](i, x))] = xnyAva['OkIsB'](C[xnyAva['nVwjl'](String, i - x)], 0x1) || 0x1;
    });
    let keys = Object['keys'](B);
    let ans = 0x0;
    keys['forEach'](i => {
        ans += xnyAva['TRSAx'](B[i], C[i]) || 0x0;
    });
    return ans;
}