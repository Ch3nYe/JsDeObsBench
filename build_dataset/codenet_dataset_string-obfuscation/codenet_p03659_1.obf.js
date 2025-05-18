'use strict';
const a0_0x2110fe = a0_0x2831;
function a0_0x2831(lnPQSp, key) {
    const stringArray = a0_0x46c9();
    a0_0x2831 = function (index, key) {
        index = index - 0x1ef;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2831(lnPQSp, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0x30a456 = a0_0x2831;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x30a456(0x1f7)) / 0x1 + parseInt(_0x30a456(0x1f1)) / 0x2 + -parseInt(_0x30a456(0x1f0)) / 0x3 * (-parseInt(_0x30a456(0x1f4)) / 0x4) + -parseInt(_0x30a456(0x1fa)) / 0x5 + parseInt(_0x30a456(0x1f6)) / 0x6 * (-parseInt(_0x30a456(0x1ef)) / 0x7) + -parseInt(_0x30a456(0x1f9)) / 0x8 * (parseInt(_0x30a456(0x1fc)) / 0x9) + parseInt(_0x30a456(0x1f3)) / 0xa * (parseInt(_0x30a456(0x1f5)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x46c9, 0xb3055));
const main = arg => {
    const _0x592c65 = a0_0x2831;
    arg = arg['trim']()[_0x592c65(0x1f2)]('\x0a');
    const N = parseInt(arg[0x0]);
    const A = arg[0x1][_0x592c65(0x1f2)]('\x20')[_0x592c65(0x1f8)](n => parseInt(n));
    const totalSum = A[_0x592c65(0x1fe)]((m, n) => m + n);
    let left = A[0x0];
    let right = totalSum - A[0x0];
    let answer = Infinity;
    for (let i = 0x0; i < N - 0x1; i++) {
        let diff = Math['abs'](right - left);
        answer = Math[_0x592c65(0x1fb)](answer, diff);
        right -= A[parseInt(i) + 0x1];
        left += A[parseInt(i) + 0x1];
    }
    console['log'](answer);
};
function a0_0x46c9() {
    const _0x33009e = [
        'readFileSync',
        'reduce',
        '1029lJJyXt',
        '6636meOtdE',
        '219600zfKMFI',
        'split',
        '10mOtdtd',
        '2572sVcxwY',
        '30560893NBisYb',
        '53574nqKaca',
        '237357NovKXt',
        'map',
        '1433680VaYFfb',
        '7133220XRMvJI',
        'min',
        '54uEBVVe'
    ];
    a0_0x46c9 = function () {
        return _0x33009e;
    };
    return a0_0x46c9();
}
main(require('fs')[a0_0x2110fe(0x1fd)]('/dev/stdin', 'utf8'));