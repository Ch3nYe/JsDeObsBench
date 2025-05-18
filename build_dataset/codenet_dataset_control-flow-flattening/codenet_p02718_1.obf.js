'use strict';
function main(input) {
    const vWMTfN = {
        'yHZgI': function (callee, param1) {
            return callee(param1);
        },
        'QhJIN': function (x, y) {
            return x < y;
        },
        'YczZh': function (x, y) {
            return x < y;
        },
        'JBsDl': function (x, y) {
            return x - y;
        },
        'orpmK': 'Yes'
    };
    const n = vWMTfN['yHZgI'](Number, input['split']('\x0a')[0x0]['split']('\x20')[0x0]);
    const m = vWMTfN['yHZgI'](Number, input['split']('\x0a')[0x0]['split']('\x20')[0x1]);
    let a = [];
    let sum = 0x0;
    for (let index = 0x0; vWMTfN['QhJIN'](index, n); index++) {
        a[index] = input['split']('\x0a')[0x1]['split']('\x20')[index];
        sum += Number(a[index]);
    }
    let count = 0x0;
    for (let index = 0x0; vWMTfN['YczZh'](index, n); index++) {
        if (vWMTfN['JBsDl'](a[index] * (0x4 * m), sum) > 0x0) {
            count++;
        }
    }
    if (count >= m) {
        console['log'](vWMTfN['orpmK']);
    } else {
        console['log']('No');
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));