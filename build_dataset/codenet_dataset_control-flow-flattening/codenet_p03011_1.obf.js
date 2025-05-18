'use strict';
function Main(input) {
    const FiHwsm = {
        'gRzgp': function (callee, param1) {
            return callee(param1);
        },
        'KXrYv': function (callee, param1) {
            return callee(param1);
        },
        'SIfOj': function (x, y) {
            return x - y;
        },
        'aWIFG': function (x, y) {
            return x + y;
        }
    };
    const P = FiHwsm['gRzgp'](Number, input['split']('\x0a')[0x0]['split']('\x20')[0x0]);
    const Q = Number(input['split']('\x0a')[0x0]['split']('\x20')[0x1]);
    const R = FiHwsm['KXrYv'](Number, input['split']('\x0a')[0x0]['split']('\x20')[0x2]);
    const max = Math['max'](P, Q, R);
    console['log'](FiHwsm['SIfOj'](FiHwsm['aWIFG'](P + Q, R), max));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());