'use strict';
const main = input => {
    const Ebnsso = {
        'Jqmxt': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'RcxCF': function (x, y) {
            return x + y;
        },
        'jpjqx': function (x, y) {
            return x / y;
        },
        'djZYo': function (x, y) {
            return x === y;
        },
        'yQvUF': function (x, y) {
            return x % y;
        },
        'nleGx': 'IMPOSSIBLE'
    };
    const args = input['split']('\x0a')['map'](arg => arg['split']('\x20'));
    const a = Ebnsso['Jqmxt'](parseInt, args[0x0][0x0], 0xa);
    const b = Ebnsso['Jqmxt'](parseInt, args[0x0][0x1], 0xa);
    const t1 = Ebnsso['RcxCF'](a, b);
    const t2 = Ebnsso['jpjqx'](t1, 0x2);
    if (Ebnsso['djZYo'](Ebnsso['yQvUF'](t2, 0x1), 0x0))
        console['log'](t2);
    else
        console['log'](Ebnsso['nleGx']);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));