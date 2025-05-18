'use strict';
function Main(input) {
    const uUhIQa = {
        'qlwuW': function (x, y) {
            return x / y;
        },
        'enUoA': function (x, y) {
            return x + y;
        },
        'eFLnZ': function (callee, param1) {
            return callee(param1);
        }
    };
    const ab = input['split']('\x20');
    console['log'](uUhIQa['qlwuW'](uUhIQa['enUoA'](uUhIQa['eFLnZ'](parseFloat, ab[0x0]), parseFloat(ab[0x1])), 0x2));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));