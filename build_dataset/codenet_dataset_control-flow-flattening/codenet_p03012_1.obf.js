'use strict';
const INF = 0x3333333333333;
function mapint(temp) {
    return temp['split']('\x20')['map'](v => parseInt(v));
}
function Main(input) {
    const ImqZwh = {
        'bVymy': function (callee, param1) {
            return callee(param1);
        },
        'wnJcu': function (x, y) {
            return x < y;
        },
        'bWmBA': function (x, y) {
            return x - y;
        },
        'miBhb': function (x, y) {
            return x < y;
        }
    };
    let temp = input['trim']()['split']('\x0a');
    let n = ImqZwh['bVymy'](parseInt, temp[0x0]);
    let w = mapint(temp[0x1]);
    let s1 = w[0x0];
    let s2 = 0x0;
    for (let i = 0x1; ImqZwh['wnJcu'](i, n); i++) {
        s2 += w[i];
    }
    let sa = Math['abs'](ImqZwh['bWmBA'](s1, s2));
    let sa2;
    for (let i = 0x1; ImqZwh['miBhb'](i, n); i++) {
        s1 += w[i];
        s2 -= w[i];
        sa = Math['min'](sa, Math['abs'](ImqZwh['bWmBA'](s1, s2)));
    }
    console['log'](sa);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));