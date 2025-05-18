'use strict';
function Main(input) {
    const VVpAFn = {
        'JcWxQ': function (x, y) {
            return x > y;
        },
        'OtCoM': function (x, y) {
            return x == y;
        },
        'hhUrw': function (x, y) {
            return x > y;
        },
        'okzBC': function (x, y) {
            return x + y;
        }
    };
    input = input['trim']()['split']('\x20')['map'](Number);
    let badKusuri = input[0x0];
    let goodKusuri = input[0x1];
    let goodPoison = input[0x2];
    for (; goodKusuri > 0x0 && VVpAFn['JcWxQ'](goodPoison, 0x0);) {
        goodKusuri--;
        goodPoison--;
    }
    if (VVpAFn['OtCoM'](goodPoison, 0x0)) {
        goodKusuri = 0x0;
    } else {
        for (; badKusuri > 0x0 && VVpAFn['JcWxQ'](goodPoison, 0x0);) {
            badKusuri--;
            goodPoison--;
        }
    }
    if (VVpAFn['hhUrw'](goodPoison, 0x0)) {
        goodPoison--;
    }
    console['log'](VVpAFn['okzBC'](input[0x1], input[0x2]) - (goodKusuri + goodPoison));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));