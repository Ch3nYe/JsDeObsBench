'use strict';
const main = arg => {
    const WpYXzI = {
        'JEIXj': function (callee, param1) {
            return callee(param1);
        },
        'tmNtF': function (x, y) {
            return x - y;
        },
        'TtFkd': function (x, y) {
            return x < y;
        },
        'udiQx': function (x, y) {
            return x + y;
        },
        'Cftnr': function (callee, param1) {
            return callee(param1);
        },
        'QYFAu': function (x, y) {
            return x + y;
        },
        'hKLcg': function (callee, param1) {
            return callee(param1);
        }
    };
    arg = arg['trim']()['split']('\x0a');
    const N = WpYXzI['JEIXj'](parseInt, arg[0x0]);
    const A = arg[0x1]['split']('\x20')['map'](n => parseInt(n));
    const totalSum = A['reduce']((m, n) => m + n);
    let left = A[0x0];
    let right = WpYXzI['tmNtF'](totalSum, A[0x0]);
    let answer = Infinity;
    for (let i = 0x0; WpYXzI['TtFkd'](i, WpYXzI['tmNtF'](N, 0x1)); i++) {
        let diff = Math['abs'](WpYXzI['tmNtF'](right, left));
        answer = Math['min'](answer, diff);
        right -= A[WpYXzI['udiQx'](WpYXzI['Cftnr'](parseInt, i), 0x1)];
        left += A[WpYXzI['QYFAu'](WpYXzI['hKLcg'](parseInt, i), 0x1)];
    }
    console['log'](answer);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));