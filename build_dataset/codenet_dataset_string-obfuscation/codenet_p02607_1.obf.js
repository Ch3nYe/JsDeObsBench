'use strict';
const a0_0x1a3356 = a0_0x3455;
function a0_0x3455(YyiSOA, key) {
    const stringArray = a0_0x1e11();
    a0_0x3455 = function (index, key) {
        index = index - 0xb2;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3455(YyiSOA, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0x220fc3 = a0_0x3455;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x220fc3(0xb8)) / 0x1 + -parseInt(_0x220fc3(0xb6)) / 0x2 + parseInt(_0x220fc3(0xb7)) / 0x3 + parseInt(_0x220fc3(0xbf)) / 0x4 * (parseInt(_0x220fc3(0xbe)) / 0x5) + -parseInt(_0x220fc3(0xb2)) / 0x6 + -parseInt(_0x220fc3(0xb5)) / 0x7 + parseInt(_0x220fc3(0xb9)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1e11, 0xe2476));
function a0_0x1e11() {
    const _0x40bc03 = [
        'split',
        '/dev/stdin',
        '2660399auPhTH',
        '2863512IpHosm',
        '4075398RbVrEA',
        '409280NiOdJN',
        '21220200BZvzwm',
        'length',
        'log',
        'trim',
        'readFileSync',
        '704020NkQxjF',
        '4zkREuH',
        '6023184ZIlizB'
    ];
    a0_0x1e11 = function () {
        return _0x40bc03;
    };
    return a0_0x1e11();
}
function main(arg) {
    const _0x1c1543 = a0_0x3455;
    let a = arg[_0x1c1543(0xbc)]()['split']('\x0a')[0x1][_0x1c1543(0xb3)]('\x20')['map'](Number);
    let N = a[_0x1c1543(0xba)];
    let ans = 0x0;
    for (let i = 0x0; i < N; i++) {
        if ((i + 0x1) % 0x2 === 0x0) {
            continue;
        }
        if (a[i] % 0x2 === 0x0) {
            continue;
        }
        ans++;
    }
    console[_0x1c1543(0xbb)](ans);
}
main(require('fs')[a0_0x1a3356(0xbd)](a0_0x1a3356(0xb4), 'utf8'));