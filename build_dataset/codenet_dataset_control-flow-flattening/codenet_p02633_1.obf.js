'use strict';
const main = arg => {
    const RUVBfM = {
        'aDWWU': function (callee, param1) {
            return callee(param1);
        },
        'JIwGL': function (x, y) {
            return x / y;
        }
    };
    let X = RUVBfM['aDWWU'](parseInt, arg);
    let result = RUVBfM['JIwGL'](0x168, X);
    result = RUVBfM['aDWWU'](String, result);
    var answer = result['replace']('.', '');
    console['log'](answer);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));