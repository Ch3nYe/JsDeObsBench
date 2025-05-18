'use strict';
function main(input) {
    const WpmUrG = {
        'VzEiM': function (callee, param1) {
            return callee(param1);
        },
        'fhdfz': function (callee, param1) {
            return callee(param1);
        }
    };
    input = input['trim']()['split']('\x20');
    const N = WpmUrG['VzEiM'](Number, input[0x0]);
    const X = WpmUrG['fhdfz'](Number, input[0x1]);
    const T = Number(input[0x2]);
    let ans = 0x0;
    let i;
    for (i = 0x0; ans < N; i++) {
        ans += X;
    }
    console['log'](T * i);
}
function numberSort(array) {
    array['sort'](f);
    return array;
}
var f = function (a, b) {
    const eeIChv = {
        'WnuEx': function (x, y) {
            return x - y;
        }
    };
    return eeIChv['WnuEx'](a, b);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf-8'));