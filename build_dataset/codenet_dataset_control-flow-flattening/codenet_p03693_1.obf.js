'use strict';
function Main(input) {
    const yYADZH = {
        'yQgwv': function (callee, param1) {
            return callee(param1);
        },
        'DbUYe': function (x, y) {
            return x === y;
        },
        'gXXwj': function (x, y) {
            return x % y;
        },
        'oBlQd': 'YES'
    };
    const param = yYADZH['yQgwv'](Number, input['split']('\x20')['join'](''));
    if (yYADZH['DbUYe'](yYADZH['gXXwj'](param, 0x4), 0x0)) {
        console['log'](yYADZH['oBlQd']);
    } else {
        console['log']('NO');
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));