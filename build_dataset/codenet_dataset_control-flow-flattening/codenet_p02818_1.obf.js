'use strict';
function Main(inputs) {
    const xEmetO = {
        'pbwIn': function (callee, param1) {
            return callee(param1);
        },
        'ueBMj': function (callee, param1) {
            return callee(param1);
        },
        'OXORu': function (callee, param1) {
            return callee(param1);
        },
        'DEgxn': function (x, y) {
            return x - y;
        },
        'jZzii': function (x, y) {
            return x + y;
        }
    };
    const input = inputs['split']('\x0a');
    const a = xEmetO['pbwIn'](Number, input[0x0]['split']('\x20')[0x0]);
    const b = xEmetO['ueBMj'](Number, input[0x0]['split']('\x20')[0x1]);
    const k = xEmetO['OXORu'](Number, input[0x0]['split']('\x20')[0x2]);
    console['log'](a > k ? xEmetO['DEgxn'](a, k) : 0x0, xEmetO['jZzii'](a, b) > k ? a + b - k : 0x0);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));