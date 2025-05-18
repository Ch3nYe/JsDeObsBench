'use strict';
const main = input => {
    const ptEZit = {
        'xwdCB': function (x, y) {
            return x === y;
        },
        'fjFnS': 'Hello\x20World',
        'FgBOv': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'XPhMz': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'TEOeN': function (x, y) {
            return x + y;
        }
    };
    const args = input['trim']()['split']('\x0a');
    const n = parseInt(args[0x0], 0xa);
    if (ptEZit['xwdCB'](n, 0x1)) {
        console['log'](ptEZit['fjFnS']);
    } else {
        const a = ptEZit['FgBOv'](parseInt, args[0x1], 0xa);
        const b = ptEZit['XPhMz'](parseInt, args[0x2], 0xa);
        console['log'](ptEZit['TEOeN'](a, b));
    }
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));