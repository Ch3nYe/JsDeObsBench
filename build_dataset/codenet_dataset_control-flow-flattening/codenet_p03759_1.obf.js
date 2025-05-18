'use strict';
const main = arg => {
    const rlkTPJ = {
        'CgZWy': function (x, y) {
            return x == y;
        },
        'TEneS': function (x, y) {
            return x - y;
        },
        'HRCRz': 'YES'
    };
    const [a, b, c] = arg['split']('\x0a')[0x0]['split']('\x20');
    console['log'](rlkTPJ['CgZWy'](rlkTPJ['TEneS'](b, a), rlkTPJ['TEneS'](c, b)) ? rlkTPJ['HRCRz'] : 'NO');
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));