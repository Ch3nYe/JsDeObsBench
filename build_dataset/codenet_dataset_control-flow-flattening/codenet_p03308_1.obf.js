'use strict';
function Main(input) {
    const xRqsSt = {
        'yYgzY': function (callee, param1) {
            return callee(param1);
        },
        'bDzMv': function (callee, param1) {
            return callee(param1);
        },
        'RsmJy': function (x, y) {
            return x - y;
        }
    };
    const params = input['split']('\x0a');
    const n = xRqsSt['bDzMv'](Number, params[0x0]);
    let max = 0x0;
    let min = Math['pow'](0xa, 0xa);
    params[0x1]['split']('\x20')['forEach'](val => {
        max = Math['max'](max, xRqsSt['yYgzY'](Number, val));
        min = Math['min'](min, Number(val));
    });
    console['log'](xRqsSt['RsmJy'](max, min));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));