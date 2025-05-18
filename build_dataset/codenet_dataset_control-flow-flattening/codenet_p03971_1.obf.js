'use strict';
const Main = input => {
    const tcziyr = {
        'XmkRf': function (callee, param1) {
            return callee(param1);
        },
        'VCDSL': function (callee, param1) {
            return callee(param1);
        },
        'jhMIQ': function (callee, param1) {
            return callee(param1);
        },
        'XuacB': function (x, y) {
            return x === y;
        },
        'ZNLlX': function (x, y) {
            return x < y;
        },
        'FXnvm': function (x, y) {
            return x + y;
        },
        'XAQCh': 'Yes',
        'BmOMx': function (x, y) {
            return x === y;
        }
    };
    const tmp = input['trim']()['split']('\x0a');
    const N = tcziyr['XmkRf'](parseInt, tmp[0x0]['split']('\x20')[0x0]);
    const A = tcziyr['VCDSL'](parseInt, tmp[0x0]['split']('\x20')[0x1]);
    const B = tcziyr['jhMIQ'](parseInt, tmp[0x0]['split']('\x20')[0x2]);
    const S = tmp[0x1];
    let result = [];
    let count = 0x0;
    let overseas = 0x0;
    for (let i = 0x0; i < N; i++) {
        const participant = S['split']('')[i];
        if (tcziyr['XuacB'](participant, 'a')) {
            if (tcziyr['ZNLlX'](count, tcziyr['FXnvm'](A, B))) {
                result['push'](tcziyr['XAQCh']);
                count += 0x1;
            } else {
                result['push']('No');
            }
        } else if (tcziyr['BmOMx'](participant, 'b')) {
            if (count < tcziyr['FXnvm'](A, B) && overseas < B) {
                result['push'](tcziyr['XAQCh']);
                count += 0x1;
                overseas += 0x1;
            } else {
                result['push']('No');
            }
        } else {
            result['push']('No');
        }
    }
    result = result['join']('\x0a');
    console['log'](result);
    return result;
};
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));