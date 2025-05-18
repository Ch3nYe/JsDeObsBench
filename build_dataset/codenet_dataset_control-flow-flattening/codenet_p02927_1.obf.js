'use strict';
const main = input => {
    const weoowz = {
        'Wucqy': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'KcWuO': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'cTmMn': function (x, y) {
            return x <= y;
        },
        'SAXEV': function (x, y) {
            return x % y;
        },
        'MqHKU': function (x, y) {
            return x / y;
        },
        'hxuWj': function (x, y) {
            return x >= y;
        },
        'Uohef': function (x, y) {
            return x === y;
        },
        'eRjYn': function (x, y) {
            return x * y;
        }
    };
    const args = input['split']('\x0a')['map'](arg => arg['split']('\x20'));
    const M = weoowz['Wucqy'](parseInt, args[0x0][0x0], 0xa);
    const D = weoowz['KcWuO'](parseInt, args[0x0][0x1], 0xa);
    let cnt = 0x0;
    for (let m = 0x1; weoowz['cTmMn'](m, M); m++) {
        for (let j = 0x1; j <= D; j++) {
            const d1 = weoowz['SAXEV'](j, 0xa);
            const d10 = Math['floor'](weoowz['MqHKU'](j, 0xa));
            if (weoowz['hxuWj'](d1, 0x2) && weoowz['hxuWj'](d10, 0x2) && weoowz['Uohef'](weoowz['eRjYn'](d1, d10), m)) {
                cnt++;
            }
        }
    }
    console['log'](cnt);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));