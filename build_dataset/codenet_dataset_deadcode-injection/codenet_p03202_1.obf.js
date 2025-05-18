'use strict';
const a0_0x238d03 = a0_0x5300;
function a0_0x3332() {
    const _0x395c9b = [
        'filter',
        'map',
        'log',
        'length',
        'zZBPc',
        'LufBU',
        'repeat',
        'substring',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x3332 = function () {
        return _0x395c9b;
    };
    return a0_0x3332();
}
function a0_0x5300(gPtJWI, key) {
    const stringArray = a0_0x3332();
    a0_0x5300 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5300(gPtJWI, key);
}
function main(input) {
    const _0x2edc90 = a0_0x5300;
    const inputs = input['split']('\x0a')[_0x2edc90(0x0)](x => x !== '');
    const n = inputs[0x0];
    const a = inputs[0x1]['split']('\x20')[_0x2edc90(0x1)](x => Number(x));
    let result = 0x1;
    while (testN(result, a) === ![]) {
        result = result + 0x1;
    }
    console[_0x2edc90(0x2)](result);
    function testN(n, a) {
        const _0x48e38e = a0_0x5300;
        let current = '0'['repeat'](a[0x0]);
        for (let i = 0x1; i < a[_0x48e38e(0x3)]; i++) {
            if (a[i - 0x1] < a[i]) {
                current = current + '0'['repeat'](a[i] - a[i - 0x1]);
            } else {
                if (_0x48e38e(0x4) === _0x48e38e(0x5)) {
                    current = '0'[_0x48e38e(0x6)](a[i] - current['length']) + current;
                } else {
                    current = parseInt(current[_0x48e38e(0x7)](0x0, a[i]), n) + 0x1;
                    if (isNaN(current)) {
                        return ![];
                    }
                    current = '' + current;
                    if (current['length'] > a[i]) {
                        return ![];
                    } else {
                        current = '0'[_0x48e38e(0x6)](a[i] - current[_0x48e38e(0x3)]) + current;
                    }
                }
            }
        }
        return !![];
    }
}
main(require('fs')['readFileSync'](a0_0x238d03(0x8), a0_0x238d03(0x9)));