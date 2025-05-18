'use strict';
const main = input => {
    const KbJXaW = {
        'khrYK': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'vjrsb': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'cJWGY': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'fzLuI': function (x, y) {
            return x >= y;
        },
        'ONJcr': function (x, y) {
            return x <= y;
        },
        'uLdsx': 'Yes'
    };
    const args = input['trim']()['split']('\x20');
    const a = KbJXaW['khrYK'](parseInt, args[0x0], 0xa);
    const b = KbJXaW['vjrsb'](parseInt, args[0x1], 0xa);
    const c = KbJXaW['cJWGY'](parseInt, args[0x2], 0xa);
    if (KbJXaW['fzLuI'](c, a) && KbJXaW['ONJcr'](c, b))
        console['log'](KbJXaW['uLdsx']);
    else
        console['log']('No');
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));