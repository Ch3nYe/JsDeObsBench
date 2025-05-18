'use strict';
const Main = input => {
    const RKfMny = {
        'DWosr': function (callee, param1) {
            return callee(param1);
        },
        'bFOnO': function (x, y) {
            return x != y;
        },
        'sZSSE': function (x, y) {
            return x % y;
        },
        'RnIRX': function (x, y) {
            return x % y;
        },
        'xrtPD': function (x, y) {
            return x / y;
        },
        'ANPiR': function (x, y) {
            return x * y;
        }
    };
    const tmp = input['trim']()['split']('\x20');
    const H = parseInt(tmp[0x0]);
    const W = RKfMny['DWosr'](parseInt, tmp[0x1]);
    let result = 0x0;
    if (RKfMny['bFOnO'](RKfMny['sZSSE'](H, 0x2), 0x0) && RKfMny['bFOnO'](RKfMny['RnIRX'](W, 0x2), 0x0)) {
        result = Math['ceil'](RKfMny['xrtPD'](RKfMny['ANPiR'](H, W), 0x2));
    } else {
        result = RKfMny['xrtPD'](H * W, 0x2);
    }
    console['log'](result);
    return result;
};
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));