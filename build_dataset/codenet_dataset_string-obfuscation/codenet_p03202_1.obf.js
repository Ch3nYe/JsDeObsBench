'use strict';
const a0_0x2b418c = a0_0x7776;
(function (stringArrayFunction, comparisonValue) {
    const _0x15bfd0 = a0_0x7776;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x15bfd0(0x148)) / 0x1 * (parseInt(_0x15bfd0(0x149)) / 0x2) + -parseInt(_0x15bfd0(0x140)) / 0x3 + -parseInt(_0x15bfd0(0x13d)) / 0x4 + -parseInt(_0x15bfd0(0x139)) / 0x5 + -parseInt(_0x15bfd0(0x144)) / 0x6 * (parseInt(_0x15bfd0(0x13b)) / 0x7) + -parseInt(_0x15bfd0(0x13e)) / 0x8 * (-parseInt(_0x15bfd0(0x145)) / 0x9) + -parseInt(_0x15bfd0(0x146)) / 0xa * (-parseInt(_0x15bfd0(0x143)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x463e, 0x906d3));
function a0_0x7776(ujlYtz, key) {
    const stringArray = a0_0x463e();
    a0_0x7776 = function (index, key) {
        index = index - 0x136;
        let value = stringArray[index];
        return value;
    };
    return a0_0x7776(ujlYtz, key);
}
function a0_0x463e() {
    const _0x45c9f9 = [
        '/dev/stdin',
        'substring',
        '110Otdodc',
        '78BGvJsU',
        '4020885ojVWYm',
        '1906360DPkSCg',
        'utf8',
        '9JkBlrS',
        '231926UguTLT',
        'map',
        'log',
        'repeat',
        '4978685ADEhTB',
        'filter',
        '153783riLcLv',
        'split',
        '2178836nodYDq',
        '8zJDBEL',
        'length',
        '2937534WAaGkI'
    ];
    a0_0x463e = function () {
        return _0x45c9f9;
    };
    return a0_0x463e();
}
function main(input) {
    const _0x38b7f4 = a0_0x7776;
    const inputs = input[_0x38b7f4(0x13c)]('\x0a')[_0x38b7f4(0x13a)](x => x !== '');
    const n = inputs[0x0];
    const a = inputs[0x1]['split']('\x20')[_0x38b7f4(0x136)](x => Number(x));
    let result = 0x1;
    while (testN(result, a) === ![]) {
        result = result + 0x1;
    }
    console[_0x38b7f4(0x137)](result);
    function testN(n, a) {
        const _0x1f6499 = _0x38b7f4;
        let current = '0'['repeat'](a[0x0]);
        for (let i = 0x1; i < a[_0x1f6499(0x13f)]; i++) {
            if (a[i - 0x1] < a[i]) {
                current = current + '0'[_0x1f6499(0x138)](a[i] - a[i - 0x1]);
            } else {
                current = parseInt(current[_0x1f6499(0x142)](0x0, a[i]), n) + 0x1;
                if (isNaN(current)) {
                    return ![];
                }
                current = '' + current;
                if (current['length'] > a[i]) {
                    return ![];
                } else {
                    current = '0'[_0x1f6499(0x138)](a[i] - current[_0x1f6499(0x13f)]) + current;
                }
            }
        }
        return !![];
    }
}
main(require('fs')['readFileSync'](a0_0x2b418c(0x141), a0_0x2b418c(0x147)));