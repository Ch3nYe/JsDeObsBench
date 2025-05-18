'use strict';
const a0_0x340193 = a0_0x5623;
function a0_0x15e2() {
    const _0x400354 = [
        '94fbXzLB',
        '7155198REYAcy',
        'map',
        '5904235ceVxly',
        'length',
        'includes',
        '47021EnPmPS',
        '/dev/stdin',
        '10481184EWryLv',
        '10925776QwGoPH',
        '46653eLvmuc',
        '4JqUQZU',
        'Yes',
        '55HwfDJj',
        'log',
        'utf8',
        'split',
        '7dOoMXr',
        '3348340jomkSV',
        'readFileSync'
    ];
    a0_0x15e2 = function () {
        return _0x400354;
    };
    return a0_0x15e2();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x1684c6 = a0_0x5623;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x1684c6(0xc8)) / 0x1 + -parseInt(_0x1684c6(0xc2)) / 0x2 * (parseInt(_0x1684c6(0xcc)) / 0x3) + parseInt(_0x1684c6(0xb9)) / 0x4 * (-parseInt(_0x1684c6(0xc5)) / 0x5) + parseInt(_0x1684c6(0xc3)) / 0x6 + parseInt(_0x1684c6(0xbf)) / 0x7 * (-parseInt(_0x1684c6(0xcb)) / 0x8) + parseInt(_0x1684c6(0xca)) / 0x9 + -parseInt(_0x1684c6(0xc0)) / 0xa * (-parseInt(_0x1684c6(0xbb)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x15e2, 0xac8e8));
function a0_0x5623(qFHBAx, key) {
    const stringArray = a0_0x15e2();
    a0_0x5623 = function (index, key) {
        index = index - 0xb9;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5623(qFHBAx, key);
}
const main = input => {
    const _0x293a50 = a0_0x5623;
    const args = input[_0x293a50(0xbe)]('\x0a')[_0x293a50(0xc4)](arg => arg[_0x293a50(0xbe)]('\x20'));
    const S = args[0x0][0x0];
    const N = S[_0x293a50(0xc6)];
    let odd = !![];
    let even = !![];
    for (let i = 0x0; i < N; i++) {
        if (i % 0x2 === 0x0) {
            if (![
                    'R',
                    'U',
                    'D'
                ][_0x293a50(0xc7)](S[i]))
                odd = ![];
        } else {
            if (![
                    'L',
                    'U',
                    'D'
                ]['includes'](S[i]))
                even = ![];
        }
    }
    if (odd && even)
        console[_0x293a50(0xbc)](_0x293a50(0xba));
    else
        console[_0x293a50(0xbc)]('No');
};
main(require('fs')[a0_0x340193(0xc1)](a0_0x340193(0xc9), a0_0x340193(0xbd)));