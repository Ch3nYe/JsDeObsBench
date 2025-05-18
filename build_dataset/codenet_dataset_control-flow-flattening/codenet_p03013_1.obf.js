'use strict';
const main = arg => {
    const XIsURQ = {
        'dzKnt': function (callee, param1) {
            return callee(param1);
        },
        'YBufs': function (callee, param1) {
            return callee(param1);
        },
        'dFSWs': function (x, y) {
            return x + y;
        },
        'pViJN': function (x, y) {
            return x <= y;
        },
        'kUXKq': function (x, y) {
            return x % y;
        },
        'qrhmq': function (x, y) {
            return x + y;
        },
        'yHhUp': function (x, y) {
            return x - y;
        },
        'vHTic': function (x, y) {
            return x - y;
        }
    };
    arg = arg['trim']()['split']('\x0a');
    const N = XIsURQ['dzKnt'](parseInt, arg[0x0]['split']('\x20')[0x0]);
    const M = XIsURQ['YBufs'](parseInt, arg[0x0]['split']('\x20')[0x1]);
    const dangers = arg['slice'](0x1, XIsURQ['dFSWs'](M, 0x1));
    let answer = [...Array(N + 0x1)]['fill'](0x1);
    let broken = -0x1;
    let NG = ![];
    for (let i in dangers) {
        if (XIsURQ['dFSWs'](broken, 0x1) === dangers[i]) {
            NG = !![];
        }
        answer[dangers[i]] = 0x0;
        broken = dangers[i];
    }
    for (let i = 0x2; XIsURQ['pViJN'](i, N); i++) {
        answer[i] = XIsURQ['kUXKq'](answer[i] * XIsURQ['qrhmq'](answer[XIsURQ['yHhUp'](i, 0x2)], answer[XIsURQ['vHTic'](i, 0x1)]), 0x3b9aca07);
    }
    console['log'](answer[N]);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));