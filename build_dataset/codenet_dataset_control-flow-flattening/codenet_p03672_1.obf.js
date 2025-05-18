'use strict';
const main = arg => {
    const RwZnwy = {
        'ldkAo': function (x, y) {
            return x / y;
        },
        'gPDeo': function (x, y) {
            return x === y;
        },
        'DMHGW': function (x, y) {
            return x + y;
        }
    };
    arg = arg['trim']()['split']('\x0a');
    const S = arg[0x0]['split']('');
    if (S['length'] === 0x2) {
        console['log'](0x1);
        return;
    }
    for (let i = 0x0; i < S['length']; i++) {
        S['pop']();
        let mid = Math['floor'](RwZnwy['ldkAo'](S['length'], 0x2));
        if (RwZnwy['gPDeo'](S['slice'](0x0, mid)['join'](''), S['slice'](mid, RwZnwy['DMHGW'](S['length'], 0x1))['join'](''))) {
            console['log'](S['length']);
            return;
        }
    }
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));