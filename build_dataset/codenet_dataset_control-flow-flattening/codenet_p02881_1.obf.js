'use strict';
function main(input) {
    const UAtiXL = {
        'ouQLB': function (callee, param1) {
            return callee(param1);
        },
        'VuPJV': function (x, y) {
            return x - y;
        },
        'pwFkr': function (x, y) {
            return x <= y;
        },
        'ONwtq': function (x, y) {
            return x / y;
        },
        'mnXua': function (x, y) {
            return x < y;
        },
        'JpSFC': function (x, y) {
            return x + y;
        },
        'aRZim': function (x, y) {
            return x - y;
        }
    };
    const N = UAtiXL['ouQLB'](parseInt, input);
    let distance = UAtiXL['VuPJV'](N, 0x1);
    for (let a = 0x2; UAtiXL['pwFkr'](a, Math['sqrt'](N)); ++a) {
        let b = UAtiXL['ONwtq'](N, a);
        if (Number['isInteger'](b) && UAtiXL['mnXua'](UAtiXL['VuPJV'](UAtiXL['JpSFC'](a, b), 0x2), distance)) {
            distance = UAtiXL['aRZim'](UAtiXL['JpSFC'](a, b), 0x2);
        }
    }
    console['log'](distance);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));