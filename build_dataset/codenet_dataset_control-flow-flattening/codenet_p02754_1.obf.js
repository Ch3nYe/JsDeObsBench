'use strict';
function main(input) {
    const dkwyBG = {
        'PorRo': function (callee, param1) {
            return callee(param1);
        },
        'uliSN': function (x, y) {
            return x === y;
        },
        'qQpKj': function (x, y) {
            return x < y;
        },
        'twHxO': function (x, y) {
            return x % y;
        },
        'ATUZC': function (x, y) {
            return x + y;
        },
        'CmpSh': function (x, y) {
            return x * y;
        },
        'NMCpl': function (x, y) {
            return x % y;
        },
        'hiagw': function (x, y) {
            return x / y;
        }
    };
    let kari = input[0x0]['trim']()['split']('\x20');
    let n = parseInt(kari[0x0]);
    let a = dkwyBG['PorRo'](parseInt, kari[0x1]);
    let b = parseInt(kari[0x2]);
    let c = a + b;
    let ans = 0x0;
    if (dkwyBG['uliSN'](a, 0x0)) {
        console['log'](0x0);
    } else if (b === 0x0) {
        console['log'](n);
    } else {
        if (dkwyBG['qQpKj'](dkwyBG['twHxO'](n, c), a)) {
            ans = dkwyBG['ATUZC'](dkwyBG['CmpSh'](Math['floor'](n / c), a), dkwyBG['NMCpl'](n, c));
        } else {
            ans = dkwyBG['CmpSh'](Math['floor'](dkwyBG['hiagw'](n, c)), a) + a;
        }
        console['log'](ans);
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a'));